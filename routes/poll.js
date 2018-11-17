"use strict";

const express = require('express');
const router = express.Router();
const sendMail = require('../public/scripts/email.js');

module.exports = (knex) => {
  const subq = require("../queries/sub_data")(knex);

  // router.get("/", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("users")
  //     .then((results) => {
  //       res.json(results);
  //   });
  // });

  // welcome page
  router.get("/", (req, res) => {
    res.render("index.ejs");
  });

  // create new poll link
  router.get("/poll/create", (req, res) => {
    res.render("create.ejs");
  });

  // display links
  router.get("/poll/:id", (req, res) => {
    let templateVars = {
      id: req.params.id
    };
    //  console.log(templateVars);
    res.render("links.ejs", templateVars);
  });

 // sub page
 router.get("/sub/poll/:id", (req, res) => {
   subq(req,res);
 });

  // sending data to db for new poll
  router.post("/poll/:id", (req, res) => {
    knex('owner').insert({
        email: req.body.email
      }).returning(['id'])
      .then((user) => {
        return knex('poll').insert({
            email_id: user[0].id,
            question: req.body.poll_title,
            description: req.body.description
          })
          .returning(['id']);
      })
      .then((poll) => {
        return Promise.all(
            req.body.decision.map(function (decision) {
              return knex('option').insert({
                poll_id: poll[0].id,
                name: decision
              });
            })
          )
          .then(function () {
            const id = poll[0].id;
            sendMail.sendCreateEmail(req.body.email, poll[0].id);
            res.redirect('/poll/' + id);
          })
          .catch(err => console.log('ERROR', err));
      });
  });

  return router;
};

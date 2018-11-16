"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

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

  // admin page
  router.get("/admin/poll/:id", (req, res) => {
    res.render("admin.ejs");
  });

  // sub page
  router.get("/sub/poll/:id", (req, res) => {
    const id1 = req.params.id;
    const decisions = [];

    knex.select('poll_id', 'name', 'value').from('option').where({
        poll_id: id1
      })
      .returning(['poll_id', 'name', 'value'])
      .then((option) => {
        return Promise.all(
          option.map(function (decision) {
            decisions.push(decision.name);
          })
        );
      })
      .then(function () {
        const templateVars = {
          decisions: decisions
        };
        console.log(decisions);
        res.render("sub.ejs", templateVars);
      })
      .catch(err => console.log('ERROR', err));

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
            console.log(id);
            res.redirect('/poll/' + id);
          })
          .catch(err => console.log('ERROR', err));
      });
  });

  return router;
};

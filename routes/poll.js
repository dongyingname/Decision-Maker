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
    res.render("links.ejs", templateVars);
  });

  // sub page
  router.get("/sub/poll/:id", (req, res) => {
    subq(req, res);
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

  //route that handles put request to endpoint /sub/poll/:id
  router.put("/sub/poll/:id", (req, res) => {
    const {
      points,
      decs
    } = req.body;
    const id = req.params.id;
   console.log("Points",points);
   console.log("Decisions",decs);
   console.log(id);

    // Select table with poll_id that is the same as the poll_id of poll that is recently
    // created.
    // loop on that table for each name and add new points to the value based on the position
    // of that name in the array that is passed from client to this route.
    // When selecting table one has to specify name and poll_id in case of repeatition of name
    // in the other polls
    for (let i = 0; i < points.length; i++) {
      let add = points[i];
      knex.select('value', 'name', 'poll_id').from('option').where({
          "name": decs[i],
          "poll_id": id
        })
        .then((option) => {
          console.log(option);
          let value = option[0].value;
          return knex.select('value', 'name', 'poll_id').from('option').where({
              name: decs[i],
              "poll_id": id
            }).update({
              "value": Number(value) + Number(add)
            })
            .then(function () {
              console.log("not frozen yet")
            })
        })
        .catch(err => {
          console.log('ERROR', err)
          res.status(500).json({
            error: err.message
          });
        });
    }
    knex('names')
    .insert({
      'poll_id': req.params.id,
      'user_name': req.body.user_name
    })
    .then((name) => {
      console.log(req.body);
    });
    res.status(200).send();
    // We try to execute all of them

  });

  return router;
};

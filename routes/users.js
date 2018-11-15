"use strict";

const express = require('express');
const router  = express.Router();

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
    res.render("index.ejs")
  });

  // create new poll link
  router.get("/poll/create", (req, res) => {
    res.render("create.ejs")
  });

  // display links
  router.get("poll/:id", (req, res) => {
    res.render(links.ejs)
  });

  // admin page
  router.get("admin/poll/:id", (req, res) => {

    res.render("admin.ejs")
  })

  // sub page
  router.get("sub/poll:id", (req, res) => {
    res.render("sub.ejs")
  })


  return router;
}






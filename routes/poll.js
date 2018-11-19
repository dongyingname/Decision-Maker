"use strict";
//acquire express module
const express = require('express');
const router = express.Router();


module.exports = (knex) => {

  const subq = require("../queries/sub_data")(knex);
  const adminq = require("../queries/admin_data")(knex);
  const createq = require("../queries/create_data")(knex);
  const rankq = require("../queries/rank_data")(knex);
  
  // welcome page
  router.get("/", (req, res) => {
    res.render("index.ejs");
  });

  // Submission page: user rank the decisions by drag and drop
  router.get("/poll/create", (req, res) => {
    res.render("create.ejs");
  });


  // User is directed to this page after welcome page.
  // Links to submission page and administration page.
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

  // Admin page
  router.get('/admin/poll/:id', (req, res) => {
    adminq(req, res);
  });


  //POST route to endpoint "/poll/:id"
  router.post("/poll/:id", (req, res) => {
    createq(req, res);
  });

  //route that handles put request to endpoint /sub/poll/:id
  router.put("/sub/poll/:id", (req, res) => {
    rankq(req, res);
  });

  return router;
};

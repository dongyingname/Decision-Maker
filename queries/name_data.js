const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.put('/sub/poll/:id', (req, res) => {
    knex('names')
    .insert({
      'poll_id': req.params.id,
      'user_name': req.body.user_name
    })
    .catch(err => console.log("ERROR", err));
    return router;
  });
};
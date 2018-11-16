const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get('/admin/poll/:id/data', (req, res) => {
    knex('option').select('name', 'value')
    .where('poll_id', req.params.id)
    .then((name_value) => {
      return knex('poll').select('question')
      .where('id', req.params.id)
      .then((question) => {
        res.status(200).send({ question, name_value });
      });
    })
    .catch(err => console.error('ERROR',  err));
  });
  return router;
};

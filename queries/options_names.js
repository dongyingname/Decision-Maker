// Export a GET route of endpoint /poll/:id/options_names
const express = require('express');
const router = express.Router();


module.exports = (knex) => {
  router.get('/poll/:id/options_names', (req, res) => {
    knex('option').select('name').where('poll_id', req.params.id)
    .then((option_names) => {
      res.send(option_names);
    })
    .catch(err => console.log('ERROR', err));
  });
return router;
};

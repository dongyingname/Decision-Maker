const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get('/admin/poll/:id', (req, res) => {
    knex('option').select('name', 'value')
    .where('poll_id', req.params.id)
    .then((name_values) => {
      return knex('poll').select('question')
      .where('id', req.params.id)
      .then((question) => {
        let templateVars = {
          'question': question[0].question,
          'name_values': JSON.stringify(name_values)
        };
        res.render('admin.ejs', templateVars);
        // res.send(templateVars)
      });
    })
    .catch(err => console.error('ERROR',  err));
  });

  return router;
};

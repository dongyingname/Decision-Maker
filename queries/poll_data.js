const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  let users = [];
  const templateVars = {};
  router.get('/admin/poll/:id', (req, res) => {
    const id = req.params.id;
    knex('user_name').select("user_name", "poll_id")
      .where('poll_id', id)
      .then((user_names) => {
        console.log(user_names);
        return Promise.all(
          user_names.map(function (user_name) {
            users.push(user_name.user_name);
          })
        );
      })
      .then(function () {
        knex('option').select('name', 'value')
          .where('poll_id', id)
          .then((name_values) => {
            return knex('poll').select('question')
              .where('id', id)
              .then((question) => {
                templateVars["user_names"] = users;
                templateVars["question"] = question[0].question;
                templateVars["name_values"] = JSON.stringify(name_values);
                console.log("final", templateVars.user_names);
                res.render('admin.ejs', templateVars);
                users = [];
                // res.send(templateVars)
              });
          })
      })
      .catch(err => console.error('ERROR', err));
  });

  return router;
};

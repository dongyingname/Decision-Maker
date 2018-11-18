const express = require('express');
const router = express.Router();

module.exports = (knex) => {
    const templateVars = {};
    router.get('/admin/poll/:id', (req, res) => {
        const id = req.params.id;
        knex('user_name').select("user_name","poll_id")
          .where('poll_id', id)
          .then((user_names) => {
            templateVars["user_name"] = user_names[0].user_name;
            console.log(templateVars);
          })
          .then(function () {
            knex('option').select('name', 'value')
              .where('poll_id', id)
              .then((name_values) => {
                return knex('poll').select('question')
                  .where('id', id)
                  .then((question) => {
                    templateVars["question"] = question[0].question;
                    templateVars["name_values"] = JSON.stringify(name_values);
                    console.log("final",templateVars)
                    res.render('admin.ejs', templateVars);
                    // res.send(templateVars)
                  });
              })
          })
          .catch(err => console.error('ERROR', err));
        });

      return router;
    };

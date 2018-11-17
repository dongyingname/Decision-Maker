// const express = require('express');
// const router = express.Router();
//
//get the value of each options name and value
//go through each of them
//where the name is equal to option

module.exports = (knex) => {
  return (req, res) => {
    const id1 = req.params.id;
    const decisions = [];
    knex.select('poll_id', 'name', 'value').from('option').where({
        poll_id: id1

    })
    .then((option) => {
      return Promise.all(
        option.map(function (decision) {
          decisions.push(decision.name);
        })
      );
    })
    .then(() => {
      return knex('poll').select('name_required').where({ id:id1 });
    })
    .then((name_required) => {
      const templateVars = {
        'decisions': decisions,
        'name_required': name_required
      };

        res.render("sub.ejs", templateVars);
    })
    .catch(err => console.log('ERROR', err));
  };
};

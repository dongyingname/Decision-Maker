// const express = require('express');
// const router = express.Router();
//
//get the value of each options name and value
//go through each of them
//where the name is equal to option

module.exports = (knex) => {
    return (req,res)=>{

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
      .then(function () {
        const templateVars = {
          decisions: decisions
        };
        console.log(decisions);
        res.render("sub.ejs", templateVars);
      })
      .catch(err => console.log('ERROR', err));
}
 




};

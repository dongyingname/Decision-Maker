

module.exports = (knex) => {

  // Takes poll's id from reqest body and gether all the data from 
  // database under that id. 
  // The data is then carried to the webpage by templateVars
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
        return knex('poll').select('name_required',"question","description").where({
          id: id1
        });
      })
      .then((poll) => {
        const templateVars = {
          decisions: decisions,
          name_required: poll[0].name_required,
          question:poll[0].question,
          description:poll[0].description
        };
        res.render("sub.ejs", templateVars);
      })
      // .then((name_required) => {
      //   const templateVars = {
      //     'decisions': decisions,
      //     'name_required': name_required
      //   };
      //   res.render("sub.ejs", templateVars);
      // })
      .catch(err => console.log('ERROR', err));
  };
};

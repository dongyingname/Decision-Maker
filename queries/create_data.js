const sendMail = require('../routes/route_scripts/email.js');
module.exports = (knex) => {
  // Insert values that are passed from the form of create page
  // into tables using knex. An email is send by chaining that
  // API in knex commands to notify the creater the poll is 
  // created
  return (req, res) => {
    knex('owner').insert({
        email: req.body.email
      }).returning(['id'])
      .then((user) => {
        return knex('poll').insert({
            email_id: user[0].id,
            question: req.body.poll_title,
            description: req.body.description,
          })
          .returning(['id']);
      })
      .then((poll) => {
        return Promise.all(
            req.body.decision.map(function (decision) {
              return knex('option').insert({
                poll_id: poll[0].id,
                name: decision
              });
            })
          )
          .then(() => {
            if (req.body.name_required) {
              if (req.body.name_required == "true") {
                return knex('poll')
                  .update({
                    name_required: true
                  })
                  .where({
                    id: poll[0].id
                  });
              }
            }
          })
          .then(function () {
            const id = poll[0].id;

            sendMail.sendCreateEmail(req.body.email, poll[0].id);

            res.redirect('/poll/' + id);
          })
          .catch(err => console.log('ERROR', err));
      });
  };
};

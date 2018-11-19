const sendMail = require('../public/scripts/email.js');

module.exports = (knex) => {

  return (req, res) => {

    const {
      points,
      decs,
      user_name
    } = req.body;
    const id = req.params.id;
    // Select table with poll_id that is the same as the poll_id of poll that is recently
    // created.
    // loop on that table for each name and add new points to the value based on the position
    // of that name in the array that is passed from client to this route.
    // When selecting table one has to specify name and poll_id in case of repeatition of name
    // in the other polls
    knex.select('email').from('owner').where({
        "id": id
      })
      .then(function (mail) {
        let email = mail[0].email;
        sendMail.sendSubmitEmail(email, id);
      })
      .then(function () {
        return knex('user_name').insert({
          "poll_id": id,
          "user_name": user_name
        });
      })
      .then(function () {
        for (let i = 0; i < points.length; i++) {
          let add = points[i];
          knex.select('value', 'name', 'poll_id').from('option').where({
              "name": decs[i],
              "poll_id": id
            })
            .then((option) => {
              let value = option[0].value;
              return knex.select('value', 'name', 'poll_id').from('option').where({
                name: decs[i],
                "poll_id": id
              }).update({
                "value": Number(value) + Number(add)
              });
            });
        }
      })
      .catch(err => {
        console.log('ERROR', err);
        res.status(500).json({
          error: err.message
        });
      });
    res.status(200).send();
  };
};

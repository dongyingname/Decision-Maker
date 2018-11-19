module.exports = (knex) => {

  // Takes poll's id from reqest body and gether all the data from
  // database under that id.
  // The data is then carried to the webpage by templateVars
  return (req, res) => {
    let users = [];
    const templateVars = {};
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
                templateVars.id = id;
                templateVars.user_names = users;
                templateVars.question = question[0].question;
                templateVars.name_values = JSON.stringify(name_values);
                res.render(admin.ejs, templateVars);
                users = [];
              });
          });
      })
      .catch(err => console.error('ERROR', err));
  };
};

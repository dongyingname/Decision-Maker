
exports.up = function(knex, Promise) {
  return knex('poll').insert({ email_id: 1, question: 'What is your favourite sport?' });
};

exports.down = function(knex, Promise) {
  return knex('poll').where({ email_id: 1 }).del();
};

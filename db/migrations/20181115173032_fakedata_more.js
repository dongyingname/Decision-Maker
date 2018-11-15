
exports.up = function(knex, Promise) {
  return knex('option').insert({ name: 'Basketball', poll_id: 1 });
};

exports.down = function(knex, Promise) {
  return knex('option').where({ name: 'Basketball' }).del();
};

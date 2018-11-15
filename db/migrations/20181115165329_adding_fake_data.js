
exports.up = function(knex, Promise) {
  return knex('owner').insert({ email: 'johnsmith@gmail.com' });
};

exports.down = function(knex, Promise) {
  return knex('owner').where({ id: 1 }).del();
};

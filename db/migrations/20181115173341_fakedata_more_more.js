
exports.up = function(knex, Promise) {
  return knex('option').insert({ name: 'Track', poll_id: 1 });
};

exports.down = function(knex, Promise) {
  return knex('option').where({ name: 'Track' }).del();
};

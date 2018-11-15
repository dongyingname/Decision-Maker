
exports.up = function(knex, Promise) {
  return knex.schema.createTable('owner', (table) => {
    table.increments('id');
    table.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('owner');
};

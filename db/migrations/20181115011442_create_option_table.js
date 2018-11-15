
exports.up = function(knex, Promise) {
  return knex.schema.createTable('option', (table) => {
    table.increments('id');
    table.integer('poll_id').unsigned();
    table.foreign('poll_id').references('poll.id');
    table.integer('position');
    table.string('value');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('option');
};

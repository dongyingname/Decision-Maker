
exports.up = function(knex, Promise) {
  return knex.schema.createTable('result', (table) => {
    table.increments('id');
    table.integer('poll_id').unsigned();
    table.foreign('poll_id').references('poll.id');
    table.integer('mapped_rank');
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('result');
};

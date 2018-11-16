
exports.up = function(knex, Promise) {
  return knex.schema.createTable('links', (table) => {
    table.integer('poll_id').unsigned();
    table.foreign('poll_id').references('poll.id');
    table.string('admin');
    table.string('sub');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('links');
};

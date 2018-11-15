
exports.up = function(knex, Promise) {
  return knex.schema.createTable('link', (table) => {
    table.increments('id');
    table.integer('poll_id').unsigned();
    table.foreign('poll_id').references('poll.id');
    table.string('admin');
    table.string('submission');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('link');
};

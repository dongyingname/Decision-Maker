
exports.up = function(knex, Promise) {
  return knex.schema.createTable('names', table => {
    table.increments('id');
    table.integer('poll_id').unsigned();
    table.foreign('poll_id').references('poll.id');
    table.string('user_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('names');
};

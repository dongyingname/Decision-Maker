
exports.up = function(knex, Promise) {
  return knex.schema.createTable('poll', (table) => {
    table.increments('id');
    table.integer('email_id').unsigned();
    table.foreign('email_id').references('owner.id');
    table.string('question');
    table.string('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('poll');
};

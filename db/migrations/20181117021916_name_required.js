
exports.up = function(knex, Promise) {
  return knex.schema.table('poll', table => {
    table.boolean('name_required');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('poll', table => {
    table.dropColumn('name_required');
  });
};

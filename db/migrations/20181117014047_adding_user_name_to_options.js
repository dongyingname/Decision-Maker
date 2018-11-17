
exports.up = function(knex, Promise) {
  return knex.schema.table('option', table => {
    table.string('user_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('option', table => {
    table.dropColumn('user_name');
  });
};

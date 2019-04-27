exports.up = function(knex, Promise) {
  return knex.schema.createTable('beers', (table) => {
    table.increments();
    table.text('name');
    table.text('description')
    table.float('alcohol')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beers')
};
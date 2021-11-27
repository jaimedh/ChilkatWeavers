const { Knex } = require("knex");

exports.up = function(knex) {
  return knex.schema
  .createTable('users', (table) => {
      table.increments('id');
    //   table.blob('file');
      table.string('name').notNullable();
      table.string('community');
      table.string('nation');    
      table.string('crest');     
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('usersinfo', (table) => {
      table.increments('id');
      table.integer('users_id').unsigned().notNullable();
     table.string('location');
     table.string('age');
     table.string('teacher');
     table.string('experience');
     table.string('blanket');
     table.string('supply');
     table.timestamp('updated_at').defaultTo(knex.fn.now());
     table
        .foreign('users_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
});
};

exports.down = function(knex) {
    return knex.schema.dropTable('usersinfo').dropTable('users');
};

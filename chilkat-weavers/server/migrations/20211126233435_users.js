const { Knex } = require("knex");

exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id"); //users primary info
      table.string('file');
      table.string("name").notNullable();
      table.string("community");
      table.string("nation");
      table.string("crest");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("usersinfo", (table) => {
      table.increments("id"); //usersinfo primary key
      table.integer("users_id").unsigned().notNullable();
      table.string("location");
      table.string("age");
      table.string("teacher");
      table.string("experience");
      table.string("blanket");
      table.string("supply");
      table.string("fb");
      table.string("instagram");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table
        .foreign("users_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    // .createTable("photos", (table) => {
    //   table.increments("id"); //photos id
    //   table.string("file");
    //   table
    //   .foreign("users_id")
    //   .references("id")
    //   .inTable("users")
    //   .onUpdate("CASCADE")
    //   .onDelete("CASCADE");

    // });
};

exports.down = function (knex) {
  return knex.schema.dropTable("usersinfo").dropTable("users");
};

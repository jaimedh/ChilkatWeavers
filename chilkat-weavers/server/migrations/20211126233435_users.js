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
      table.boolean("blanket");
      table.string("supply");
      table.string("comments");
      table.string("website");
      table.string("fb");
      table.string("instagram");
      table.string("twitter");

      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table
        .foreign("users_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("landingphotos", (table) => {
      table.increments("id"); //photos id
      table.string("file");
      table.string("info");
      table.string("comments");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      // .foreign("users_id")
      
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("usersinfo").dropTable("users");
};

// const knex  = require("knex");


exports.up = function (knex) {
    return knex.schema
    .createTable("weavers", (table) => {
        table.increments("id"); //landingphotos id
        table.string("links");
        table.string("info");
        table.string("comments");
        table.string("website");
        table.string("instagram");
        table.string("facebook");
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        table.string("google_id");        
      })
      .createTable("images", (table) => {
        table.increments("id"); //primary photos id key
        table.integer('weavers_id').unsigned().notNullable();
        table.string("file");
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      table
        .foreign("weavers_id")
        .references("id")
        .inTable("weavers")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
});
}

exports.down = function(knex) {
    return knex.schema.dropTable("weavers").dropTable("images");
};

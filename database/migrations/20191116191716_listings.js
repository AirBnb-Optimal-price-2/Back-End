exports.up = function(knex) {
  return knex.schema.createTable("listings", tbl => {
    tbl.increments();

    tbl.string("label", 255).notNullable();
    tbl.integer("accomodates").notNullable();
    tbl.integer("bedrooms").notNullable();
    tbl.float("bathrooms").notNullable();
    tbl.string("bed_type", 255).notNullable();
    tbl.integer("minimum_nights").notNullable();
    tbl.integer("optimal_price").notNullable();
    tbl
      .integer("users_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("listings").dropTableIfExists("users");
};

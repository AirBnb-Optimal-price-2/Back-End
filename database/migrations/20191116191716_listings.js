exports.up = function(knex) {
  return knex.schema.createTable("listings", tbl => {
    tbl.increments();

    tbl.string("label", 255).notNullable();
    tbl.string("neighborhood", 255).notNullable();
    tbl.integer("accomodates").notNullable();
    tbl.integer("bedrooms").notNullable();
    tbl.float("bathrooms").notNullable();
    tbl.string("room_type", 255).notNullable();
    tbl.boolean("wifi").notNullable();
    tbl.boolean("tv").notNullable();
    tbl.boolean("Laptop_friendly_workspace").notNullable();
    tbl.boolean("family_kid_friendly").notNullable();
    tbl.boolean("smoking_allowed").notNullable();
    tbl.integer("minimum_nights").notNullable();
    tbl.integer("extra_people").notNullable();
    tbl.integer("cleaning_fee").notNullable();
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

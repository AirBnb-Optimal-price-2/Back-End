const bcrypt = require("bcryptjs");

const hashPassword = password => {
  return bcrypt.hashSync(password, 10);
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "admin", password: hashPassword("password") }
      ]);
    });
};


const bcrypt = require("bcryptjs");

const user = [
  {
    username: "admin",
    password: "password"
  }
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .then(function() {
      // Inserts seed entries
      return knex("users").insert(user);
    });
};
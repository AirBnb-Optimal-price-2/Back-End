const db = require("../database/dbConfig");

module.exports = {
  add,
  findBy,
  remove,
  update
};

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users").where(filter);
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

function update(id, updatedUser) {
  return db("users")
    .where({ id })
    .update(updatedUser)
    .then(() => findBy({ id }));
}

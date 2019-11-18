const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findUserListing,
  remove,
  update
};

async function add(listing) {
  const [id] = await db('listings').insert(listing);

  return findBy(id);
}

function find() {
  return db("listings");
}

function findBy(id) {
  return db("listings")
    .where({ id })
    .first();
}

function findUserListing(id) {
  return db("listings")
    .join("users", "users.id", "listings.users_id")
    .where({ users_id: id });
}

function remove(id) {
  return db("listings")
    .where({ id })
    .del();
}

function update(id, updatedlisting) {
  return db("listings")
    .where({ id })
    .update(updatedlisting)
    .then(() => findBy(id));
}

const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findUserListing,
  remove,
  update
};

function add(listing) {
  return db("listings")
    .insert(listing, "id")
    .then(ids => {
      const id = ids[0];
      return db("listings")
        .where({ id })
        .first();
    });
}

function find() {
  return db("listings");
}

function findBy(id) {
  return db("listings")
    .where({ id })
    .first();
}

function findUserListing(user) {
  return db("users")
  .join('listings', 'listings.users_id', '=', 'users.id')
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

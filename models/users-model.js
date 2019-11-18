const db = require("../database/dbConfig");

module.exports = {
  add,
  findBy,
  remove,
  update
};

function add(user) {
  console.log("inside add function")
  // const resultReturn = db('users').insert(user, 'id')
  // console.log(resultReturn)
  // return resultReturn
  return db("users")
    .insert(user, "id")
    // .then(ids => {
    //   const id = ids[0];
      // return db("users")
      //   .where({ id })
      //   .first();
    //});
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
    .then(() => findBy({id}));
}

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/users-model");
const { validateUser } = require("../models/users-helpers");
const generateToken = require("./generateToken");

router.post("/register", (req, res) => {
  let user = req.body;
  const validateResult = validateUser(user);

  if (validateResult.isSuccessful === true) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
     console.log(user)
    Users.add(user)
      .then(saved => {
        const token = generateToken(saved);
        res.status(201).json({ saved, token });
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(400).json({
      message: "Invalid information about the user, see errors for details",
      errors: validateResult.errors
    });
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          user_id: `${user.id}`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// DELETE - user
router.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  Users.remove(id)
  .then(deleted => res.json({message: "user deleted successfully"}))
  .catch(err => res.status(500).json({ error: "Failed to delete user." }))
});

//Update user
router.put("/user/:id", (req, res) => {
   const id = req.params.id;
   const updatedUser = req.body;
  Users.update(id, updatedUser)
  .then(updated => res.status(201).json(updated))
  .catch(err => res.status(500).json({ error: "Failed to update user." }))
});

module.exports = router;
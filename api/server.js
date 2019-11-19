const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const authenticate = require("../auth/authenticate-middleware");
const authRouter = require("../auth/auth-router.js");
const listingsRouter = require("../listings/listing-router");

const server = express();

const setting = [helmet(), cors(), morgan("dev"), express.json()];

server.use(setting);

server.use("/api/auth", authRouter);
server.use("/api", authenticate, listingsRouter);

server.get("/", (req, res) => {
  res.status(200).send(<h1>Welcome to Airbnb Optimal price</h1>);
});

module.exports = server;

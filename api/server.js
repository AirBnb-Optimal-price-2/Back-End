const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const server = express();

const setting = [helmet(), cors(), morgan("dev"), express.json()];

server.use(setting);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

module.exports = server;
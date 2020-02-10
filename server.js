const express = require("express");
const server = express();
const ProjectRouter = require("./projects/project-router.js");
const ResourceRouter = require("./projects/resource-router.js");

server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = server;

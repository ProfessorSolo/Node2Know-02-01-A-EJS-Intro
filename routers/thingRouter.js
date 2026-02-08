
const express = require("express");
const thingRouter = express.Router();

thingRouter.get("/", (req, res) => res.render("things"));
thingRouter.get("/:thingId", (req, res) => {
  res.send(`Details for thing ${req.params.thingId}`);
});

module.exports = thingRouter;

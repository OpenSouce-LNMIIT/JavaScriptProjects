const user = require("express").Router();

const { findUser, getUser } = require("../../controllers/user/user.controller");

user.get("/:id", getUser);

user.delete("/find/:id", findUser);

module.exports = user;

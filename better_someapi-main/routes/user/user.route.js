const user = require("express").Router();

const { postUser, getUser } = require("../../controllers/user/user.controller");

user.get("/:id", getUser);
user.post("/create", postUser);

module.exports = user;

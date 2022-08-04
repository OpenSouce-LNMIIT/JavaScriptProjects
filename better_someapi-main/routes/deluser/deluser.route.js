const user = require("express").Router();

const { delUser, getUser } = require("../../controllers/user/user.controller");

user.get("/:id", getUser);

user.delete("/del/:id", delUser);

module.exports = user;

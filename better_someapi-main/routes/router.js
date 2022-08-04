const router = require("express").Router();

const user = require("./user/user.route");

const delUser = require("./deluser/deluser.route")

const findUser = require("./finduser/finduser.route")

router.use("/user", user);

router.use("/del", delUser);

router.use("/find", findUser)

module.exports = router;

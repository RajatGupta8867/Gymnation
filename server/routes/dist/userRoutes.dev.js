"use strict";

var express = require("express");

var _require = require("../controller/authController"),
    createUser = _require.createUser,
    getAllUser = _require.getAllUser,
    loginUser = _require.loginUser;

var router = express.Router();
router.get("/", getAllUser);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
module.exports = router;
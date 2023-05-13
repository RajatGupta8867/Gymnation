"use strict";

var express = require("express");

var _require = require("../controller/paymentController"),
    createMembership = _require.createMembership,
    cardDetail = _require.cardDetail;

var router = express.Router();
router.route("/createMembership").post(createMembership);
router.route("/cardDetail").post(cardDetail);
module.exports = router;
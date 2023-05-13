const express = require("express");
const {
  createMembership,
  cardDetail,
} = require("../controller/paymentController");

const router = express.Router();

router.route("/createMembership").post(createMembership);
router.route("/cardDetail").post(cardDetail);

module.exports = router;

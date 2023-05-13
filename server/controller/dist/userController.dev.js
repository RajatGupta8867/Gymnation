"use strict";

var User = require("../model/User");

exports.patchUser = function _callee(req, res) {
  var _req$body, name, occupation, password, location, response;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, occupation = _req$body.occupation, password = _req$body.password, location = _req$body.location;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.user, {
            name: name,
            occupation: occupation,
            password: password,
            location: location
          }, {
            "new": true
          }));

        case 3:
          response = _context.sent;
          res.status(200).json({
            status: "success",
            updatedUser: response
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};
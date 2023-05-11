"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setToken = exports.setUser = exports.userSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  user: "",
  token: ""
};
var userSlice = (0, _toolkit.createSlice)({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: function setUser(state, action) {
      // console.log("setting user to ", action.payload);
      state.user = action.payload;
    },
    setToken: function setToken(state, action) {
      // console.log("setting token to ", action.payload);
      state.token = action.payload;
    }
  }
});
exports.userSlice = userSlice;
var _userSlice$actions = userSlice.actions,
    setUser = _userSlice$actions.setUser,
    setToken = _userSlice$actions.setToken;
exports.setToken = setToken;
exports.setUser = setUser;
var _default = userSlice.reducer;
exports["default"] = _default;
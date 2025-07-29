"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provider = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

// src/firebase.ts ou src/firebase.js
var firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJECT_ID.firebaseapp.com" // ...

};
var app = (0, _app.initializeApp)(firebaseConfig);
var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var provider = new _auth.GoogleAuthProvider();
exports.provider = provider;
require("dotenv").config();

var Spotify = require("node-spotify-api");
var Axios = require("axios");
var keys = require("./keys.js");

// var spotify = new Spotify({
//     id: d2f5f6c2c11141798893cf709e1d63f3,
//     secret: 42fde0aaadbb4639bbda9e970b7dd25d
//   });

// spotify.search({ type: "track", query: "All the Small Things" }, function(
//   err,
//   data
// ) {
//   if (err) {
//     return console.log("Error occurred: " + err);
//   }

//   console.log(data);
// });

var argvlength = process.argv.length;
var argument = process.argv[2];
var query = process.argv[3];

console.log(argvlength);

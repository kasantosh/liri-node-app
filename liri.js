require("dotenv").config();

var Spotify = require("node-spotify-api");
var axios = require("axios");
var keys = require("./keys.js");
var moment = require("moment");
var fs = require("fs");

var action = process.argv[2];
var query = process.argv.slice(3).join(" ");
//console.log(argument, query);

switch (action) {
  case "concert-this":
    //bands in town
    concertThis(query);
    break;

  case "spotify-this-song":
    //go to spotify
    var spotify = new Spotify(keys.spotify);
    console.log(keys.spotify);
    spotify
      .search({ type: "track", query: "All the Small Things" })
      .then(function(response) {
        console.log(response.href);
      })
      .catch(function(err) {
        console.log(err);
      });
    break;
  case "movie-this":
    //go to axios OMDB
    movieThis(query);

    break;
  case "do-what-it-says":
    //go to spotify
    fs.readFile("random.txt", "utf-8", function(err, data) {
      if (err) {
        return console.log("Error");
      }
      //do-what-it-says
      var queryArray = data.split(",");
      // console.log(data);
      // console.log(queryArray);
      var dothisAction = queryArray[0];
      var dothisQuery = queryArray[1];
      // console.log(dothisAction, dothisQuery);
      query = dothisQuery.split(" ");
      query = query[0];
      // console.log(query);
      concertThis(query);

      // var  = q.split(" ");
      // console.log(b);

      // switch (a) {
      //   case "movie-this":
      //     movieThis();
      //     break;
      //   case "concert-this":
      //     concertThis(b[0]);
      // }
    });
    break;
}

function movieThis(query1) {
  console.log(query);
  axios
    .get(
      "http://www.omdbapi.com/?t=" + query1 + "&y=&plot=short&apikey=trilogy"
    )
    .then(function(response) {
      console.log("=====================================");
      console.log("The movie title is " + response.data.Title);
      console.log("Year of release: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      console.log("Country Produced: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("=====================================");
      // console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function concertThis(query1) {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        query1 +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      console.log("=====================================");
      for (var e in response.data) {
        console.log(response.data[e].venue.name);
        console.log(
          response.data[e].venue.city + ", " + response.data[e].venue.country
        );
        var date = moment(response.data[e].datetime).format("MM/DD/YYYY");
        var time = moment(response.data[e].datetime).format("HH:mm");
        console.log(date);
        console.log(time);
        // console.log(response.data);
        console.log("=====================================");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

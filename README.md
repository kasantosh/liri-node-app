## Liri Bot App

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

---

There are 4 different commands from the command-line

1. concert-this [singer or band name] -
   Gives all converts with date, time and venue of the given artist

   ![](/images/concert-this-screenshot.jpg)

1. movie-this [movie name] -
   Gives some details about the movie
   ![](/images/movie-this-screenshot.jpg)

1. spotify-this-song [song name] -
   Gives the song name, artist or band, Album name and a link to preview this song.
   ![](/images/spotify-this-screenshot.jpg)

1. do-what-this-says -
   Reads from the random.txt file and does what the text file says based on the commands given above
   ![](/images/do-what-screenshot.jpg)

### Bugs

When the random.txt is changed to "spotify-this-song", it throws an error for the function (spotifySong()) while the same function works from the commandline. Trying to figure this out.

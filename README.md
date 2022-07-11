# Movie Ratings UI
This is an example of a Vue.js UI with a Sinatra backend and is still a work in progress. Major features are currently missing. See the TO DO section for more information.

The backend API code can be viewed at https://github.com/kelsy/movie-ratings-api

## TO DO:
* Add Users - Add ability to create a user account and store reviews per user
* Allow Updates/Deletion - Add ability to update or delete reviews
* Fix SSL - HTTPS does not work currently on heroku deployment
* Refactor Components - Could possibly combine MovieShow and MovieCreate components
* Improve Validation - Form validation/errors could use some improvement
* Add a different favicon XD

## Attributions
Movie data from [OMDb API](http://www.omdbapi.com/).

Default Film Reel image created by [OpenClipart-Vectors](https://pixabay.com/users/openclipart-vectors-30363) at [Pixabay](https://pixabay.com/). To see it in action, search for a movie titled "1234".

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Set up backend Sinatra API
Instructions at https://github.com/kelsy/movie-ratings-api

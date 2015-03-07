"use strict";

var yts = require('./../lib/yts');

yts.listMovies({}, function (err, json) {

    json.data.movies.forEach(function (movie) {
        console.log(movie);
    });
});
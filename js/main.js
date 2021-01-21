"use strict";

let numberOfFilms;

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Enter many counts films you watched: ', '');

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Enter many counts films you watched: ', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastWatchedMovie = prompt('Enter last movie what you watched: '),
            ratingMovie = +prompt(`Enter rating ${lastWatchedMovie}: `, 0);

        if (lastWatchedMovie != null && ratingMovie != null && lastWatchedMovie.length < 50 && lastWatchedMovie != '' && ratingMovie != '') {
            personalMoviesDB.movies[lastWatchedMovie] = ratingMovie;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        alert('So little much watched movies');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30) {
        alert('You pro!!! Its so cool!');
    } else {
        alert('You are faggot!');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const favoriteWatchedMovie = prompt(`Favorite genres movie ${i}: `);

        if (favoriteWatchedMovie != null && favoriteWatchedMovie.length < 50 && favoriteWatchedMovie != '') {
            personalMoviesDB.genres[i - 1] = favoriteWatchedMovie;
        } else {
            i--;
        }
    }
}

start();
// rememberMyFilms();
writeYourGenres();
// detectPersonalLevel();
showMyDB(personalMoviesDB.privat);
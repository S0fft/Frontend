"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt("Сколько фильмов Вы уже посмотрели?", "");
        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt("Один из последних просмотренных фильмов?", "").trim();
            const markLastFilm = +prompt("На сколько оцените его?").trim();

            if (lastFilm != null && markLastFilm != null && lastFilm != "" && markLastFilm != "" && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = markLastFilm;
                console.log("DONE");
            } else {
                console.log("ERROR");
                i--;
            }
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            if (personalMovieDB.genres === null || personalMovieDB.genres === "") {
                console.log("Вы ввели некоректные данные!");
                i--;
            }
        }
        personalMovieDB.genres.forEach(function (item, index) {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
    },
    detectPersonalLevt: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотренно довльно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы настоящий киноман!");
        } else {
            alert("Произошла ошибка!");
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
}
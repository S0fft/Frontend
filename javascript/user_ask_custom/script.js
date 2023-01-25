"use strict";

alert("Добро пожаловать на наш сайт! Пожалуйста, ответьте на несколько наших вопросов, это поможет нам подобрать Вам фильмы!");
const yesNo = confirm("Вы согласны?");
console.log(yesNo);

if (yesNo == true) {

    alert("Хорошо, начнем");

    const numberofFilms = prompt("Сколько фильмов Вы уже посмотрели?");

    const film_One = prompt("Один из последних просмотренных фильмов?", " ");
    const filmActors_One = prompt("Каков был состав главных актеров?", " ")
    const markActors_One = prompt("На сколько оцените актеров по 10 балльной шкале?", " ");
    const markFilm_One = prompt("На сколько оцените фильм по 10 балльной шкале?", " ");

    const film_Two = prompt("Назовите еще один фильм, ", " ");
    const filmActors_Two = prompt("Каков был состав главных актеров?", " ");
    const markActors_Two = prompt("На сколько оцените актеров по 10 балльной шкале?", " ");
    const markFilm_Two = prompt("На сколько оцените фильм по 10 балльной шкале?", " ");

    const personalMovieDB = {
        count: numberofFilms,
        movies: {},
        actors: {},
    };

    personalMovieDB.movies[film_One] = markFilm_One;
    personalMovieDB.actors[filmActors_One] = markActors_One;

    personalMovieDB.movies[film_Two] = markFilm_Two;
    personalMovieDB.actors[filmActors_Two] = markActors_Two;
    console.log(personalMovieDB);
} else {
    alert("Очентadqwd жаль!");
}













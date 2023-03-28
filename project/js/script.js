/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();

const ad = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      background = document.querySelector('.promo__bg'),
      filmsList = document.querySelector('.promo__interactive-list');

ad.forEach(el => {
    el.remove();
})

genre.textContent = "драма";

background.style.backgroundImage = "url('./img/bg.jpg')";

filmsList.innerHTML = '';
movieDB.movies.forEach((item, index) =>{
    filmsList.innerHTML += `
        <li class="promo__interactive-item">${index + 1} ${item}
            <div class="delete"></div>
        </li>
    `;
});
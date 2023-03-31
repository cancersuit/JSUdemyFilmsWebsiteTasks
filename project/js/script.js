/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

//first task

const ad = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      background = document.querySelector('.promo__bg'),
      filmsList = document.querySelector('.promo__interactive-list');

ad.forEach(el => {
    el.remove();
})

genre.textContent = "драма";

background.style.backgroundImage = "url('./img/bg.jpg')";


//second task

const form = document.querySelector('.add');
const inputFilm = form.querySelector('.adding__input');
const submitButton = form.querySelector('.submit__button');
const checkbox = document.getElementById('checkbox');

function updateFilms() {
    movieDB.movies.sort();
    filmsList.innerHTML = '';
    movieDB.movies.forEach((item, index) => {
        filmsList.innerHTML += `
            <li class="promo__interactive-item">${index + 1} ${item}
                <div class="delete"></div>
            </li>
        `;
    });

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((el, index) => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
        
            el.parentNode.remove();
            movieDB.movies.splice(index, 1);
            updateFilms();
        });
    });
}
updateFilms();

submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    movieDB.movies.sort();
    let newFilm = inputFilm.value;

    if(checkbox.checked){
        console.log('Добавляем любимый фильм');
        checkbox.checked = false;
    }

    if(newFilm){
        if(newFilm.length > 21){
            newFilm = newFilm.slice(0, 21) + '...';
        }

        movieDB.movies.push(newFilm);
        inputFilm.value = '';
        updateFilms();
    }
});



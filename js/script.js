"use strict";
const switcher = document.querySelector('#cbx'),
      more = document.querySelector('.more'),
      modal = document.querySelector('.modal'),
      videos = document.querySelectorAll('videos__item');
let player;

function bindSlideToggle (trigger, boxBody, content, openClass) {
    let button = {
        'element' : document.querySelector(trigger),
        'isActive' : false
    };
    const box = document.querySelector(boxBody),
                boxContent = document.querySelector(content);
                
    button.element.addEventListener('click', ()=> {
        function open(button, box) {
            button.isActive = true;
            box.style.height = boxContent.clientHeight + 'px';
            box.classList.add(openClass);
        }

        function close(button, box) {
            button.isActive = false;
            box.style.height = 0 + 'px';
            box.classList.remove(openClass);
        }

        button.isActive === false ? open(button, box) : close(button, box);
    });
}

bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');

function switchMode() {
    const white = '#fff';
    const black = '#000';
    let elems = ['.videos__item-descr', '.videos__item-views', '.header__item-descr'];

    function setColor(elements, color) {
        document.querySelectorAll(elements).forEach(element => {
            element.style.color = color;
        });
    }

    if (night === false) {
        night = true;
        document.body.classList.add('night');
        document.querySelector('.logo > img').src = 'logo/youtube_night.svg';

        document.querySelectorAll('.hamburger > line').forEach(line => {
            line.style.stroke = white;
        });

        elems.forEach(element => {
            setColor(element, white);
        });
    } else {
        night = false;
        document.body.classList.remove('night');
        document.querySelector('.logo > img').src = 'logo/youtube.svg';

        document.querySelectorAll('.hamburger > line').forEach(line => {
            line.style.stroke = black;
        });

        elems.forEach(element => {
            setColor(element, black);
        });
    }
}

let night = false;
switcher.addEventListener('change', switchMode);

const data = [
    ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
    ['#3 Верстка на flexbox CSS | Блок преимущества и галерея | Марафон верстки | Артем Исламов',
       '#2 Установка spikmi и работа с ветками на Github | Марафон вёрстки Урок 2',
       '#1 Верстка реального заказа landing page | Марафон верстки | Артем Исламов'],
    ['3,6 тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],
    ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
];

more.addEventListener('click', () => {
    const videosWrapper = document.querySelector('.videos__wrapper');
    more.remove();

    for (let i = 0; i < data[0].length; i += 1) {
        let card = document.createElement('a');
        card.classList.add('videos__item', 'videos__item-active');
        card.setAttribute('data-url', data[3][i]);
        card.innerHTML = `
            <img src="${data[0][i]}" alt="thumb">
            <div class="videos__item-descr">
                ${data[1][i]}
            </div>
            <div class="videos__item-views">
                ${data[2][i]}
            </div>
        `;
        videosWrapper.appendChild(card);
        setTimeout(() => {
            card.classList.remove('videos__item-active');
        }, 10);
        videosWrapper.appendChild(more);
    }

});
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

    if (!night) {
        night = true;
        document.body.classList.add('night');

        document.querySelectorAll('.hamburger > line').forEach(line => {
            line.style.stroke = white;
        });

        elems.forEach(element => {
            setColor(element, white);
        });
        

    } else {
        night = false;
        document.body.classList.remove('night');
        document.querySelectorAll('.hamburger > line').forEach(line => {
            line.style.stroke = black;
        });

        elems.forEach(element => {
            setColor(element, black);
        });
        
    }
}

let night = false;
switcher.addEventListener('change', () => {
    switchMode();
});
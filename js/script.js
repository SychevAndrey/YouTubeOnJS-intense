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
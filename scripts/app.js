import {iniModal} from './modal.js';
import * as menuScript from './menu.js';
import {smoothScroll,initListeners} from './servises.js';

// console.log('app.js');

iniModal();
menuScript.iniMenu();

menuScript.worksBurger();
initListeners();
smoothScroll();

// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.menu_item'),
//     burger = document.querySelector('.burger');

//     burger.addEventListener('click', () => {
//         burger.classList.toggle('burger_active');
//         menu.classList.toggle('menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             burger.classList.toggle('burger_active');
//             menu.classList.toggle('menu_active');
//         })
//     })
// })
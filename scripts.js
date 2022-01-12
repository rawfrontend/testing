'use strict';

let input = document.querySelector('input');
let click = 'click';
let notNav = document.querySelectorAll('body > :not(nav)');
const uncheck = () => input.checked = false;

input.addEventListener(
  click,
  () => { for (let element of notNav) element.addEventListener(click, uncheck) }
);

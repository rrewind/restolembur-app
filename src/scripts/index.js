import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'
import App from './App';

const app = new App({
    button: document.querySelector('.menu'),
    drawer: document.querySelector('.nav-list'),
    
  });
  
const hero = document.querySelector('.hero');
const main = document.querySelector('main');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});
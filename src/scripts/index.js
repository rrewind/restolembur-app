import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'

const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const hero = document.querySelector('.hero');
const main = document.querySelector('main');

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

hero.addEventListener("click", () => {
  navbar.classList.remove("open");
});

main.addEventListener("click", () => {
  navbar.classList.remove("open");
});
import "./styles.css";
import { renderHome } from "./home";
import { renderMenu } from "./menu";

// console.log('test');
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");
console.log(home);
document.addEventListener('DOMContentLoaded',renderHome)
home.addEventListener("click", renderHome);

menu.addEventListener("click",renderMenu)


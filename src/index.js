import "./styles.css";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderAbout } from "./about-content";

const home = document.querySelector(".homebtn ");
const menu = document.querySelector(".menubtn");
const about = document.querySelector(".aboutbtn");
document.addEventListener('DOMContentLoaded',renderHome)

home.addEventListener("click", renderHome);

menu.addEventListener("click",renderMenu)

about.addEventListener('click',renderAbout)




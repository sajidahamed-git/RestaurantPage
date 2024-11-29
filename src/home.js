import restaurantImg from "./assets/restaurant.jpg";
export const renderHome = function () {
  const home = document.querySelector(".homebtn");
  const menu = document.querySelector(".menubtn");
  const about = document.querySelector(".aboutbtn");

  home.classList.add("highlightbtn");
  about.classList.remove("highlightbtn");
  menu.classList.remove("highlightbtn");

  const main = document.querySelector(".main");
  main.replaceChildren();
  const DivContainer = document.createElement("div");
  DivContainer.id = "home";

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Contoro Restaurant";
  DivContainer.appendChild(h1);

  const img = document.createElement("img");

  img.src = restaurantImg;
  img.style = "width: 100%; max-width: 400px; display: block; margin: 0 auto";

  DivContainer.appendChild(img);

  const p = document.createElement("p");
  p.textContent = ` Experience the finest dining in the galaxy! At Stellar Bites, we serve out-of-this-world dishes crafted 
  with passion, love, and the freshest ingredients. Whether you're craving classic comfort food or adventurous 
  culinary creations, we have something for everyone.`;
  DivContainer.appendChild(p);
  main.appendChild(DivContainer);

  const homeButton = document.querySelector(".homebtn");
  homeButton.classList.add("highlightbtn");
  // console.log(homeButton);
  // homeButton.style.borderBottom = '2px solid white'
};

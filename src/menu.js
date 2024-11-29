export function renderMenu() {
  const main = document.querySelector(".main");
  main.replaceChildren();

  const menuContent = document.createElement("div");
  menuContent.id = "menu-content";

  const h1 = document.createElement("h1");
  h1.textContent = "Our Menu";
  menuContent.appendChild(h1);

  const dish1 = document.createElement('div')
  dish1.classList.add('dish')

  const h2 = document.createElement('h2')
  h2.textContent = 'Galactic Pasta'

  const p1 = document.createElement('p')
  p1.textContent = 'Signature Dish: A blend of stellar spices and fresh ingredients.'

  dish1.appendChild(h2)
  dish1.appendChild(p1)

  menuContent.appendChild(dish1)

  const dish2 = document.createElement('div')
  dish1.classList.add('dish')

  const h3 = document.createElement('h2')
  h3.textContent = 'Brownie'

  const p2 = document.createElement('p')
  p2.textContent = 'Dessert Special: Sweet treats for every explorer.'

  dish2.appendChild(h3)
  dish2.appendChild(p2)

  menuContent.appendChild(dish2)

  const dish3 = document.createElement('div')
  dish3.classList.add('dish')

  const h4 = document.createElement('h2')
  h4.textContent = 'Starlight Soup'

  const p3 = document.createElement('p')
  p3.textContent = 'A warm, hearty bowl filled with the flavors of the universe'

  dish3.appendChild(h4)
  dish3.appendChild(p3)

  menuContent.appendChild(dish3)



  main.appendChild(menuContent);
}

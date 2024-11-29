 export function renderAbout() {

    const main  = document.querySelector('.main')
    main.replaceChildren()
  const aboutContainer = document.createElement("div");
  aboutContainer.id = "about-content";

  const h1 = document.createElement("h1");
  h1.textContent = "About Contoro Restaurant";
  aboutContainer.appendChild(h1);

  const p1 = document.createElement("p");
  p1.textContent =
    "At Contoro Restaurant, we pride ourselves on delivering an unparalleled dining experience. " +
    "Nestled in the heart of the galaxy, our restaurant combines a love for food with a passion for creativity.";
  aboutContainer.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent =
    "Our chefs are intergalactic culinary masters who source the freshest ingredients from across the universe. " +
    "Whether you're stopping by for a casual meal or celebrating a special occasion, we aim to make every visit memorable.";
  aboutContainer.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent =
    "Join us and experience flavors that are truly out of this world!";
  aboutContainer.appendChild(p3);

  // Append to body or a specific parent container
  main.appendChild(aboutContainer)
}

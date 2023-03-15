import { data } from "./data.js";

const grid = document.querySelector(".grid");
const search = document.querySelector("input");
const faculty = document.querySelector("select");

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "box";
  card.innerHTML = `
  <div class = 'content-img'><img src=${obj.image} alt='${obj.name}'></div>
                     <div class="content-text">
                    <h3 class="content-title">${obj.name}</h3>
                    <ul class="content-list">
                    <li> Actor: ${obj.actor}</li>
                    <li>Gender: ${obj.gender}</li>
                    <li>House: ${obj.house}</li>
                    <li>Wand core: ${obj.wand.core}</li>
                    <li>Alive: ${obj.alive ? "yes" : "no"}</li>
                    </ul>
                    </div>`;

  return card;
}

data.forEach((card) => grid.append(createCard(card)));

function funcSearch() {
  grid.innerHTML = "";
  data.forEach((elem) => {
    if (
      elem.name.toLowerCase().trim().includes(search.value.toLowerCase().trim())
    )
      if (faculty.value === "Choose one" || elem.house === faculty.value)
        grid.append(createCard(elem));
  });
}

search.addEventListener("input", funcSearch);
faculty.addEventListener("change", funcSearch);

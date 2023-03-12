import { data } from "./data.js";

const grid = document.querySelector(".grid");
const search = document.querySelector("input");
const faculty = document.querySelector("select");

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "box";
  card.innerHTML = `<div class = 'wrapper'><img src=${obj.image} alt='${
    obj.name
  }' class='img'></div>
                     <div class="box_persone">
                    <h3>${obj.name}</h3>
                    <p> Actor: ${obj.actor}</p>
                    <p>Gender: ${obj.gender}</p>
                    <p>House: ${obj.house}</p>
                    <p>Wand core: ${obj.wand.core}</p>
                    <p>Alive: ${obj.alive ? "yes" : "no"}</p>
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

let characters = [];

fetch("characters.json")
    .then(response => response.json())
    .then(data => {
        characters = data;

        populateFilter();
        renderCharacters(characters);
    })
    .catch(error => console.error("Error loading JSON:", error));

const filter = document.querySelector("#filter");
const results = document.querySelector("#results");
const template = document.querySelector("#card-template");

function populateFilter() {
    characters.forEach(character => {
        const option = document.createElement("option");
        option.value = character.name;
        option.textContent = character.name;
        filter.appendChild(option);
    });
}

function renderCharacters(list) {
    results.innerHTML = "";

    list.forEach(character => {
        const clone = template.content.cloneNode(true);

        clone.querySelector("img").src = character.image;
        clone.querySelector(".name").textContent = character.name;
        clone.querySelector(".age").textContent = character.age;
        clone.querySelector(".class").textContent = character.class;
        clone.querySelector(".background").textContent = character.background;

        results.appendChild(clone);
    });
}

function filterCharacters() {
    const selected = filter.value;

    if (selected === "") {
        renderCharacters(characters);
    } else {
        const filtered = characters.filter(character =>
            character.name === selected
        );

        renderCharacters(filtered);
    }
}

filter.addEventListener("change", filterCharacters);

populateFilter();
renderCharacters(characters);


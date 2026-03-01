let character = {
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100
};

const classValue = document.getElementById("classValue");
const levelValue = document.getElementById("levelValue");
const healthValue = document.getElementById("healthValue");

const attackedBtn = document.querySelector(".attacked");
const levelUpBtn = document.querySelector(".level-up");

function renderCharacter() {
    classValue.textContent = character.class;
    levelValue.textContent = character.level;
    healthValue.textContent = character.health;
}

attackedBtn.addEventListener("click", () => {
    if (character.health <= 0) return;

    character.health -= 10;

    if (character.health <= 0) {
        character.health = 0;
        alert("💀 Snortleblat has fallen in battle!");
    }

    renderCharacter();
});

levelUpBtn.addEventListener("click", () => {
    if (character.health <= 0) return;

    character.level += 1;
    renderCharacter();
});

renderCharacter();
var menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");
console.log(menuBtn);
console.log(menu);

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("menu-hide");
    menuBtn.classList.toggle("change")
}
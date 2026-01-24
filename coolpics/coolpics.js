const menuLabel = document.getElementById("menu-label");
const fullNavHTML = nav.innerHTML;

function updateNav()
{
    if (window.innerWidth < 700) {
        menuLabel.innerHTML = "Menu";
        menuLabel.style.cursor = "pointer";
    } else {
        menuLabel.innerHTML = fullNavHTML;
        menuLabel.style.cursor = "default";
    }
}

updateNav();

window.addEventListener("resize", updateNav);
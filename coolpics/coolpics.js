const menuLabel = document.getElementById("menu-label");
const fullNavHTML = nav.innerHTML;

function updateNav()
{
    if (window.innerWidth < 700) {
        nav.innerHTML = "Menu";
        nav.style.cursor = "pointer";
    } else {
        nav.innerHTML = fullNavHTML;
        nav.style.cursor = "default";
    }
}

updateNav();

window.addEventListener("resize", updateNav);
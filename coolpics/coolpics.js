const menuLabel = document.getElementById("menu-label");
const navLinks = document.querySelectorAll("nav a");

function updateNav()
{
    if (window.innerWidth < 700) {
        menuLabel.style.display = "block";
        navLinks.forEach(link => link.style.display = "none");
    } else {
        menuLabel.style.display = "none";
        navLinks.forEach(link => link.style.display = "inline");
    }
}

updateNav();

window.addEventListener("resize", updateNav);
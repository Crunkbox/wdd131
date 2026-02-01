const menuLabel = document.getElementById("menu-label");
const nav = document.querySelector("nav");
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

menuLabel.addEventListener("click", () => {
    nav.classList.toggle("open");
});

gallery.addEventListener('click', openModal);

function openModal (e) {
    const image = e.target;
    const src = image.getAttribute('src');
    const alt = image.getAttribute('alt');
    const largeSrc = src.replace('-sm', '-full');
    modalImage.setAttribute('src', largeSrc);
    modalImage.setAttribute('alt', alt);
    modal.showModal();
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
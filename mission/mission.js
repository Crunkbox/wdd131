let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.querySelector('h1').style.color = 'white';
        document.querySelector('.subheader').style.color = '#9dbded'

        document.querySelectorAll('p:not(.subheader), li').forEach(el => {
            el.style.color = 'white';
        });

        logo.src = 'byui-logo-white.png';
    } else if (current === 'light') { 
        document.body.style.backgroundColor = 'white';
        document.querySelector('h1').style.color = 'black';
        document.querySelector('.subheader').style.color = '#0000ff'

        document.querySelectorAll('p:not(.subheader), li').forEach(el => {
            el.style.color = 'black';
        });

        logo.src = 'byui-logo-blue.png';
    };
}
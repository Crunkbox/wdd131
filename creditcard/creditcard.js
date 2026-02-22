document.querySelector("#cardForm").addEventListener("submit", e => {
    e.preventDefault();

    const errors = document.querySelector('.errors');
    errors.textContent = '';

    const number = document.querySelector('#cardNumber').value.replace(/\s+/g, '');
    const month = Number(document.querySelector('#month').value);
    const year = Number(document.querySelector('#year').value);

    if (number !== '1234123412341234') {
        errors.textContent = 'Invalid card number';
        return;
    }

    const now = new Date();
    const fullYear = 2000 + year;

    if (
        fullYear < now.getFullYear() ||
        (fullYear === now.getFullYear() && month <= now.getMonth() + 1)
    ) {
        errors.textContent = 'Card is expired';
        return
    }

    document.querySelector('form').innerHTML =
        '<h2>Payment Successful</h2>';
});
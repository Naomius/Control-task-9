new WOW({
    animateClass: 'animate__animated',
}).init();

$('.card-image').magnificPopup({
    type: 'image'
    // other options
});

$('.single-item').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$("#accordion").accordion();


let firstName = $('#first-name');
let indexInput = $('#zipCode');
let lastName = $('#last-name');
let inputTel = $('#tel')
let inputCountry = $('#country');
let inputAddress = $('#address');
let modalMenu = document.getElementsByClassName('modal')[0];

let letters = /[A-Z, a-z, а-я, А-Я]/g;
indexInput.oninput = function () {
    this.value = this.value.replace(letters, '');
}

// let submitBtn = document.getElementById('formBtn');
// submitBtn.addEventListener('click', registration)

$('#formBtn').on('click', registration);

function registration() {
    const isValid = validateFormRegistration()
    if(isValid) {
        document.getElementById('closeSection').style.display = 'none';
        modalMenu.style.display = 'block';
    }
}

let closePopup = document.getElementsByClassName('btn-close')[0];
closePopup.onclick = function () {
    modalMenu.style.display = 'none';
}

function validateFormRegistration() {
    if (!firstName.val().trim()) {
        alert('Заполните поле Имя')
        return false;
    }
    if (!lastName.val().trim()) {
        alert('Заполните поле Фамилия')
        return false;
    }
    if (!inputTel.val().trim()) {
        alert('Заполните поле Телефон')
        return false;
    }
    if (!inputCountry.val().trim()) {
        alert('Заполните поле Страна')
        return false;
    }
    if (indexInput.val().length > 6 || indexInput.val().length < 6) {
        alert('Введите 6 символов');
        return false;
    }
    if (!inputAddress.val().trim()) {
        alert('Заполните поле Адрес')
        return false;
    }
        return true;
}
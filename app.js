/*Selectors */

const emailInputElement = document.getElementById('email-Input');
const passwordInputElement = document.getElementById('password-Input');
const emaillabelElement = document.getElementById('emailLabel');
const passwordlabelElement = document.getElementById('passwordLabel');


//fuctions
function changeColor(x) {
    x.style.color = '#1DA1F2';
}

// event listeners and triggers

emailInputElement.addEventListener('focus', (event) => {
    changeColor(emaillabelElement);
})
passwordInputElement.addEventListener('focus', (event) => {
    changeColor(passwordlabelElement);
})
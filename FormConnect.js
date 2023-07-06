const loginButton = document.getElementById('login');
const signupButton = document.getElementById('signup');
const container = document.getElementById('container');

signupButton.addEventListener('click', () => {
    container.classList.add('panel-active');
});

loginButton.addEventListener('click', () => {
    container.classList.remove('panel-active');
});
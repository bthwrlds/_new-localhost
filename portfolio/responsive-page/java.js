// toggle menu
var menuButton = document.querySelector('.menu-button');
var menu = document.getElementById('menu');

menuButton.addEventListener('click', function(){
    menu.classList.toggle('is_visible');
    console.log('hello');
});


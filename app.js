//hero message

const hireMe = document.querySelector('.hero__message');
const itsMe = document.querySelector('.hero-image');

itsMe.onmouseover = function(e) {
    hireMe.setAttribute('style', 'visibility: visible;')
    console.log('Hi :---)');
}

hireMe.onmouseover = function(e) {
    hireMe.setAttribute('style', 'visibility: visible;')
    console.log('Hi');
}

itsMe.onmouseout = function(e) {
    hireMe.removeAttribute('style', 'visibility: visible;')
    console.log('Bye :---)');
}
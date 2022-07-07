const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});


document.querySelectorAll('.img-wrapper img').forEach(Image => {
  Image.onclick = () => {
    document.querySelector('.pop-up-img').style.display = 'block';
    document.querySelector('.pop-up-img img').src = Image.getAttribute('src');
  }
});
document.querySelector('.pop-up-img span').onclick = () => {
  document.querySelector('.pop-up-img').style.display = 'none';
}

//Loading event
let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
  spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});



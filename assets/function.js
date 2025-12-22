document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-links');

  if (!toggle || !nav) {
    console.error('Nav toggle or nav links not found');
    return;
  }

  toggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    console.log('Menu toggled:', nav.classList.contains('active'));
  });
});

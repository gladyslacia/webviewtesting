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

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    alert(
      'Thanks for reaching out! Your Growth Audit request has been received. I’ll get back to you shortly.'
    );

    form.reset();
  });
});

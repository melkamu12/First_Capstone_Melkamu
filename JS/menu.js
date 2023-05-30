document.addEventListener('DOMContentLoaded', () => {
  const bodyContent = document.querySelector('body');
  const navEl = document.querySelector('.nav-bar');
  const btnClose = document.querySelector('.close-icon');
  const btnNavigation = document.querySelector('.nav-btn');
  const navItems = document.querySelector('.nav-bar-list');
  const navLinks = document.querySelectorAll('.item');
  const logo = document.querySelector('.nav-logo');

  function toggleNavigation() {
    btnClose.classList.toggle('hidden');
    btnNavigation.classList.toggle('hidden');
    navEl.classList.toggle('nav-mobile');
    bodyContent.classList.toggle('overflow');
    logo.classList.toggle('opacity');
    navItems.classList.toggle('mobile-nav-list');
  }

  function closeNavigation() {
    bodyContent.classList.remove('overflow');
    navEl.classList.add('fade-out');
    navItems.classList.remove('mobile-nav-list');
    btnClose.classList.add('hidden');
    btnNavigation.classList.remove('hidden');
    logo.classList.remove('opacity');
  }

  // Event listeners
  btnNavigation.addEventListener('click', toggleNavigation);
  btnClose.addEventListener('click', toggleNavigation);
  navLinks.forEach((element) => {
    element.addEventListener('click', closeNavigation);
  });
});

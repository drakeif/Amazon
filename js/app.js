const menuBtn = document.getElementById('menuBtn'),
      modal = document.getElementById('modal'),
      closeMenu = document.querySelectorAll('.modal__nav');

menuBtn.addEventListener('click', (e)=> {
    e.target.classList.toggle('active');
    modal.classList.toggle('active');
});

closeMenu.forEach(el => el.addEventListener('click', (e)=> {
    menuBtn.classList.remove('active');
    modal.classList.remove('active');
  }));
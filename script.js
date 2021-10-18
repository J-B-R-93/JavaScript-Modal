'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// We don't call the function (place the parentheses) to activate the function on the click event
// If we place the parentheses below, JavaScript will run the function before the click event
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // event is an object create and we are addressing the property of key named Escape
  //   !contains hidden >>> visible not hidden
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

'use strict';

// Selecting DOM elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Adding event listeners to open modal buttons
btnsOpenModal.forEach(btn.addEventListener('click', openModal));

// Adding event listeners to close modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Closing the modal when the Escape key is pressed
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

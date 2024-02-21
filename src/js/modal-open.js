const buttonOpen = document.querySelector('.button__wrapper');
const modalWindow = document.querySelector('[data-modal="modal-wholesale"]');
const closeButton = document.querySelector('.mClose-fix');
console.dir(closeButton);

buttonOpen.addEventListener('click', onClick);
closeButton.addEventListener('click', onClose);
function onClick(event) {
  modalWindow.classList.remove('is-hidden');
}
function onClose(event) {
  modalWindow.classList.add('is-hidden');
}

const buttonsOpen = document.querySelectorAll('.hero__button');
const modalWindow = document.querySelector('[data-modal="modal-wholesale"]');
const closeButton = document.querySelector('.mClose-fix');

buttonsOpen.forEach(item => {
  item.addEventListener('click', e => {
    modalWindow.classList.toggle('is-hidden');
  });
});
closeButton.addEventListener('click', onClose);
function onClose(event) {
  modalWindow.classList.add('is-hidden');
}

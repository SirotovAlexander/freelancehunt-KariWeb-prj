const buttonsOpen = document.querySelectorAll('.hero__button');
const modalWindow = document.getElementById('contacModalWindowFix');
const closeButton = document.querySelector('.mClose-fix');

// buttonsOpen.forEach(item => {
//   item.addEventListener('click', e => {
//     modalWindow.classList.toggle('is-hidden');
//   });
// });
buttonsOpen.forEach(item => {
  item.addEventListener('click', e => {
    modalWindow.classList.remove('is-hidden');
  });
});

closeButton.addEventListener('click', onClose);
function onClose(event) {
  modalWindow.classList.add('is-hidden');
}

const bodyElem = document.querySelector('body');
const buttonsOpen = document.querySelectorAll('.hero__button');
const modalWindow = document.getElementById('contacModalWindowFix');
const closeButton = document.querySelector('.mClose-fix');

console.dir(bodyElem);
// buttonsOpen.forEach(item => {
//   item.addEventListener('click', e => {
//     modalWindow.classList.toggle('is-hidden');
//   });
// });
buttonsOpen.forEach(item => {
  item.addEventListener('click', e => {
    modalWindow.classList.remove('is-hidden');
    bodyElem.style.position = 'fixed';
  });
});

closeButton.addEventListener('click', onClose);
function onClose(event) {
  modalWindow.classList.add('is-hidden');
  bodyElem.style.position = '';
}

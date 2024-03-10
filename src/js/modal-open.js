const bodyElem = document.querySelector('body');
const buttonsOpen = document.querySelectorAll('.hero__button');
const modalWindow = document.getElementById('contacModalWindowFix');
const closeButton = document.querySelector('.mClose-fix');

buttonsOpen.forEach(item => {
  item.addEventListener('click', e => {
    modalWindow.classList.remove('is-hidden');
    const value = `-${window.scrollY}px`;

    bodyElem.style.position = 'fixed';
    bodyElem.style.top = value;
  });
});

closeButton.addEventListener('click', onClose);
function onClose(event) {
  modalWindow.classList.add('is-hidden');
  // const value = `-${window.scrollY}px`;
  // console.log(window.scrollY);
  const value = window.scrollY;
  // window.scrollTo(0, 684);
  bodyElem.style.position = '';
  bodyElem.style.top = '';
  window.scrollTo(0, 684);
}
// window.scrollTo(0, 684);

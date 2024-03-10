const screenWidth = window.screen.width;
let goodsGalery = null;

if (screenWidth <= 1260) {
  goodsGalery = document.querySelector('.goods__galery');
}
if (screenWidth > 1260) {
  goodsGalery = document.querySelector('.goods__galery--Desktop');
}

const goodsModal = document.querySelector('.goodsGalery__backdrop');

goodsGalery.addEventListener('click', openGoodsModal);

function openGoodsModal(e) {
  console.log(e.target);
  goodsModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  goodsModal.addEventListener('click', e => {
    if (e.currentTarget.classList[0] === 'goodsGalery__backdrop') {
      goodsModal.classList.add('is-hidden');
      window.removeEventListener('keydown', onEscKeyPress);
    }
  });
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    goodsModal.classList.add('is-hidden');
  }
  window.removeEventListener('keydown', onEscKeyPress);
}

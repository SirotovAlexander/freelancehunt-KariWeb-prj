const goodsGalery = document.querySelector('.goods__imgSlider');
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

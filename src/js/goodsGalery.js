const list = document.querySelectorAll('.goods__item');
list.forEach(item => {
  item.addEventListener('click', e => {
    list.forEach(el => {
      el.classList.remove('goods__item-active');
      el.children[0].classList.remove('goods__button-active');
    });

    item.classList.add('goods__item-active');
    item.children[0].classList.add('goods__button-active');
  });
});

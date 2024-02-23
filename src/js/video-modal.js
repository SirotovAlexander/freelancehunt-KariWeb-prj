const video = document.querySelector('.hero__vidio');
const videoModal = document.querySelector('.video__backdrop');
// console.log(video, videoModal);

video.addEventListener('click', openVideo);

function openVideo(e) {
  videoModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  videoModal.addEventListener('click', e => {
    if (e.currentTarget.classList[0] === 'video__backdrop') {
      videoModal.classList.add('is-hidden');
      window.removeEventListener('keydown', onEscKeyPress);
    }
  });
}
function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    videoModal.classList.add('is-hidden');
  }
  window.removeEventListener('keydown', onEscKeyPress);
}

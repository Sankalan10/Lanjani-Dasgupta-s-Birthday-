const openBtn = document.getElementById('openBtn');
const gift = document.getElementById('gift');
const bgm = document.getElementById('bgm');
const playMusic = document.getElementById('playMusic');

openBtn.addEventListener('click', () => {
  gift.classList.remove('hidden');
  openBtn.classList.add('hidden');
  // optional: add confetti or animations here
});

playMusic.addEventListener('click', () => {
  if (bgm.paused) {
    bgm.play();
    playMusic.textContent = 'Pause Music';
  } else {
    bgm.pause();
    playMusic.textContent = 'Play Music';
  }
});

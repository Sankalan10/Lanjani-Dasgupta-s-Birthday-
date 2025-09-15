// Grab elements
const openBtn = document.getElementById('openBtn');
const gift = document.getElementById('gift');
const bgm = document.getElementById('bgm');
const playMusic = document.getElementById('playMusic');

// 🎉 Gift open logic
openBtn.addEventListener('click', () => {
  gift.classList.remove('hidden');
  openBtn.classList.add('hidden');

  // Play music automatically
  bgm.play();

  // Confetti burst 🎊
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
});

// 🎶 Music button toggle
playMusic.addEventListener('click', () => {
  if (bgm.paused) {
    bgm.play();
    playMusic.textContent = 'Pause Music';
  } else {
    bgm.pause();
    playMusic.textContent = 'Play Music';
  }
});

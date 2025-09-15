// Grab elements
const openBtn = document.getElementById('openBtn');
const gift = document.getElementById('gift');
const bgm = document.getElementById('bgm');
const playMusic = document.getElementById('playMusic');
const countdown = document.getElementById("countdown");

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

// ⏳ Countdown Timer
const targetDate = new Date("2025-09-20 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdown.textContent = "🎂 It's time to celebrate!";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.textContent = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }
}, 1000);

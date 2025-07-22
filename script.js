document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('images-container');
  // const imageList = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
  const imageList = [];
  imageList.forEach((img) => {
    const image = document.createElement('img');
    image.src = `images/${img}`;
    image.alt = 'Memory Photo';
    container.appendChild(image);
  });
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas(); // Initial call
  const music = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-btn');

  musicBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      musicBtn.textContent = '🔊';
    } else {
      music.pause();
      musicBtn.textContent = '🔇';
    }
  });

  function startCountdown(targetDateString) {
    const countdownDate = new Date(targetDateString).getTime();
    const now = new Date().getTime();
    const timer = document.getElementById('timer');
    const countdownSection = document.getElementById('countdown-section');
    const mainContent = document.getElementById('main-content');

    if (now >= countdownDate) {
      countdownSection.style.display = 'none';
      mainContent.style.display = 'block';
      return;
    }

    setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = countdownDate - currentTime;

      if (distance <= 0) {
        timer.innerHTML = "🎉 It's time! 🎉";
        countdownSection.style.display = 'none';
        mainContent.style.display = 'block';
        document.body.classList.add('surprise');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }

  startCountdown('2025-07-29T00:00:00');
});

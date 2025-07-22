document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('images-container');
  const imageList = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
  // const imageList = [];
  imageList.forEach((img) => {
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('heart');

    const image = document.createElement('img');
    image.src = `images/${img}`;
    image.alt = 'Memory Photo';
    heartContainer.appendChild(image);
    container.appendChild(heartContainer);
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

  // function startCountdown(targetDateString) {
  //   const countdownDate = new Date(targetDateString).getTime();
  //   const now = new Date().getTime();
  //   const timer = document.getElementById('timer');
  //   const countdownSection = document.getElementById('countdown-section');
  //   const mainContent = document.getElementById('main-content');
  //   console.log(countdownDate);
  //   if (now >= countdownDate) {
  //     countdownSection.style.display = 'none';
  //     mainContent.style.display = 'block';
  //     return;
  //   }

  //   setInterval(() => {
  //     const currentTime = new Date().getTime();
  //     const distance = countdownDate - currentTime;

  //     if (distance <= 0) {
  //       timer.innerHTML = "🎉 It's time! 🎉";
  //       countdownSection.style.display = 'none';
  //       mainContent.style.display = 'block';
  //       document.body.classList.add('surprise');
  //       return;
  //     }

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  //     const minutes = Math.floor((distance / (1000 * 60)) % 60);
  //     const seconds = Math.floor((distance / 1000) % 60);

  //     timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  //   }, 1000);
  //   let clickCount = 3;
  //   heartBtn.addEventListener('click', () => {
  //     heartBtn.classList.add('beat-once');

  //     setTimeout(() => {
  //       heartBtn.classList.remove('beat-once');
  //     }, 500);

  //     clickCount--;
  //     if (clickCount > 0) {
  //       heartBtn.textContent = `❤️ Tap to unlock (${clickCount})`;
  //     } else {
  //       heartBtn.style.display = 'none';
  //       arrowAnim.style.display = 'block';

  //       setTimeout(() => {
  //         unlockSection.style.display = 'none';
  //         mainContent.style.display = 'block';
  //         document.body.classList.add('surprise');
  //       }, 1500);
  //     }
  //   });
  // }
  function startCountdown(targetDateString) {
    const countdownDate = new Date(targetDateString).getTime();
    const timer = document.getElementById('timer');
    const countdownSection = document.getElementById('countdown-section');
    const unlockSection = document.getElementById('unlock-section');
    const mainContent = document.getElementById('main-content');
    const heartBtn = document.getElementById('heart-reveal-btn');
    const arrowAnim = document.getElementById('arrow-animation');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const now = new Date().getTime();
    if (now >= countdownDate) {
      countdownSection.style.display = 'none';
      unlockSection.style.display = 'block';
    }

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = countdownDate - currentTime;

      if (distance <= 0) {
        clearInterval(interval);
        timer.innerHTML = "🎉 It's time! 🎉";
        countdownSection.style.display = 'none';
        unlockSection.style.display = 'block';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    let clickCount = 3;
    heartBtn.addEventListener('click', () => {
      heartBtn.classList.add('beat-once');

      setTimeout(() => {
        heartBtn.classList.remove('beat-once');
      }, 500);

      clickCount--;
      if (clickCount > 0) {
        heartBtn.textContent = `❤️ Tap to unlock (${clickCount})`;
      } else {
        heartBtn.style.display = 'none';
        arrowAnim.style.display = 'block';

        setTimeout(() => {
          unlockSection.style.display = 'none';
          mainContent.style.display = 'block';
          document.body.classList.add('surprise');
          confettiCanvas.style.display = 'block';
        }, 2000);
      }
    });
  }
  startCountdown('2025-07-29T00:00:00');
});

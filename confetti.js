const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 20 + 10,
    color: `hsl(${Math.random() * 360}, 80%, 70%)`,
    speed: Math.random() * 2 + 1,
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 2 - 1
  };
}

for (let i = 0; i < 100; i++) {
  hearts.push(createHeart());
}

function drawHeart(x, y, size, color, rotation) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation * Math.PI / 180);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
  ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, i) => {
    drawHeart(heart.x, heart.y, heart.size, heart.color, heart.rotation);
    heart.y += heart.speed;
    heart.rotation += heart.rotationSpeed;

    if (heart.y > canvas.height + heart.size) {
      hearts[i] = createHeart();
    }
  });
  requestAnimationFrame(animate);
}

animate();
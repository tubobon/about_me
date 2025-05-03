const cat = document.getElementById("nyancat");
let x = 100;
let y = 100;
let vx = 2;
let vy = 1.5;
let flipped = false;

function moveCat() {
  const catWidth = cat.offsetWidth;
  const catHeight = cat.offsetHeight;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  x += vx;
  y += vy;

  if (x <= 0 || x + catWidth >= screenWidth) {
    vx = -vx;
    flipped = !flipped;
  }

  if (y <= 0 || y + catHeight >= screenHeight) {
    vy = -vy;
  }

  cat.style.left = `${x}px`;
  cat.style.top = `${y}px`;

  // 左右反転（CSS変形）
  cat.style.transform = flipped ? "scaleX(-1)" : "scaleX(1)";

  requestAnimationFrame(moveCat);
}

moveCat();

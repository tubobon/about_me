const cat = document.getElementById("nyancat");

let x = 100;
let y = 100;
let vx = 2;
let vy = 2;
let flipped = false;

function moveCat() {
  const catWidth = cat.offsetWidth;
  const catHeight = cat.offsetHeight;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  x += vx;
  y += vy;

  // 左右の壁に当たったら反転
  if (x <= 0 || x + catWidth >= screenWidth) {
    vx = -vx;
    flipped = vx < 0; // 左右反転（向き）
  }

  // 上下の壁に当たったら反転
  if (y <= 0 || y + catHeight >= screenHeight) {
    vy = -vy;
  }

  cat.style.left = `${x}px`;
  cat.style.top = `${y}px`;

  // 向き（左向き or 右向き）
  cat.style.transform = flipped ? "scaleX(-1)" : "scaleX(1)";

  requestAnimationFrame(moveCat);
}

moveCat();

const memzTextEl = document.getElementById("memz-text");
const mainScreen = document.getElementById("main-screen");
const memzScreen = document.getElementById("memz-screen");

const message = "Your computer has been trashed by MEMZ trojan. Now enjoy the Tubo Cat...";
let index = 0;

// MEMZ風のタイピングテキスト
function typeText() {
  if (index < message.length) {
    memzTextEl.textContent += message.charAt(index);
    index++;
    setTimeout(typeText, 50);
  } else {
    setTimeout(() => {
      memzScreen.style.display = "none";
      mainScreen.classList.add("show");
      startNyanLoop(); // nyan.js風アニメーション開始
    }, 1500);
  }
}

typeText();

// nyancatsの生成と往復移動
function startNyanLoop() {
  setInterval(() => {
    const cat = document.createElement("img");
    cat.src = "nyancats.gif";
    cat.className = "nyancat";
    cat.style.top = `${Math.random() * 80 + 10}%`;
    cat.style.left = "-100px";

    document.getElementById("nyancat-container").appendChild(cat);

    let direction = 1;
    let pos = -100;

    const moveInterval = setInterval(() => {
      pos += direction * 4;
      cat.style.left = pos + "px";

      if (direction === 1 && pos > window.innerWidth) {
        direction = -1;
        cat.style.transform = "scaleX(-1)";
      }

      if (direction === -1 && pos < -100) {
        clearInterval(moveInterval);
        cat.remove();
      }
    }, 16);
  }, 1000); // 1秒おきに出現
}

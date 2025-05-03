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

// nyancatsの生成と移動（反転なし）
function startNyanLoop() {
  setInterval(() => {
    const cat = document.createElement("img");
    cat.src = "nyancats.gif"; // 右向きGIF
    cat.className = "nyancat";
    cat.style.top = `${Math.random() * 80 + 10}%`;
    cat.style.left = "-100px";

    document.getElementById("nyancat-container").appendChild(cat);

    let pos = -100;

    const moveInterval = setInterval(() => {
      pos += 4;
      cat.style.left = pos + "px";

      // 画面右端を超えたら削除
      if (pos > window.innerWidth) {
        clearInterval(moveInterval);
        cat.remove();
      }
    }, 16); // 約60fps
  }, 1000); // 1秒ごとに出現
}

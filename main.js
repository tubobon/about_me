const memzTextEl = document.getElementById("memz-text");
const mainScreen = document.getElementById("main-screen");
const memzScreen = document.getElementById("memz-screen");

const message = "Your computer has been trashed by MEMZ trojan. Now enjoy the Tubo Cat...";
let index = 0;

function typeText() {
  if (index < message.length) {
    memzTextEl.textContent += message.charAt(index);
    index++;
    setTimeout(typeText, 50);
  } else {
    setTimeout(() => {
      // 切り替え
      memzScreen.style.display = "none";
      mainScreen.classList.add("show");
    }, 2000); // 表示後2秒待つ
  }
}

typeText();

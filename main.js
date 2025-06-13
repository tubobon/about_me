const memzTextEl = document.getElementById("memz-text");
const mainScreen = document.getElementById("main-screen");
const memzScreen = document.getElementById("memz-screen");
const startBtn = document.getElementById("start-game-btn");
const gameScreen = document.getElementById("game-screen");

const matrixEl = document.getElementById("matrix-container");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const tipBtn = document.getElementById("tip-btn");
const shopBtn = document.getElementById("shop-btn");
const lifeEl = document.getElementById("life");
const moneyEl = document.getElementById("money");
const comboEl = document.getElementById("combo");
const messageEl = document.getElementById("message");

let life, money, combo, currentCorrect;

function initGame() {
  life = 3;
  money = 0;
  combo = 0;
  updateStatus();
  genMatrix();
  messageEl.textContent = 'ゲーム開始！行列式を計算しよう';
}

function updateStatus() {
  lifeEl.textContent = life;
  moneyEl.textContent = money;
  comboEl.textContent = combo;
}

function genMatrix() {
  const lvl = Math.floor(combo / 5) + 4;
  const vals = Array.from({ length: 9 }, () => Math.floor(Math.random() * lvl));
  currentCorrect = vals[0] * (vals[4]*vals[8]-vals[5]*vals[7]) - vals[1]*(vals[3]*vals[8]-vals[5]*vals[6]) + vals[2]*(vals[3]*vals[7]-vals[4]*vals[6]);
  matrixEl.innerHTML = `|${vals[0]} ${vals[1]} ${vals[2]}|<br>|${vals[3]} ${vals[4]} ${vals[5]}|<br>|${vals[6]} ${vals[7]} ${vals[8]}|`;
}

submitBtn.addEventListener("click", () => {
  const ans = parseInt(answerInput.value);
  if (isNaN(ans)) return messageEl.textContent = "数字を入力してください";
  if (ans === currentCorrect) {
    combo++; const reward = combo * 10; money += reward;
    messageEl.textContent = `正解！+${reward} money`;
  } else {
    life--; money = Math.max(0, money - 5); combo = 0;
    messageEl.textContent = `不正解... 正解は ${currentCorrect}`;
  }
  updateStatus(); answerInput.value = '';
  if (life <= 0) {
    alert("ゲームオーバー！リスタートします。");
    initGame();
  } else genMatrix();
});

tipBtn.addEventListener("click", () => {
  if (money >= 100) { money -= 100; messageEl.textContent = "Tip獲得（効果はない）"; updateStatus(); }
  else messageEl.textContent = "お金が足りません";
});

shopBtn.addEventListener("click", () => {
  alert("今は使えないけど将来追加できるよ！");
});

startBtn.addEventListener("click", () => {
  gameScreen.classList.remove("hidden");
  gameScreen.scrollIntoView({ behavior: "smooth" });
  initGame();
});

// タイピングからスタート
let idx = 0;
const message = "Your computer has been trashed by MEMZ trojan. Now enjoy the Tubo Cat...";
function typeText() {
  if (idx < message.length) {
    memzTextEl.textContent += message[idx++];
    setTimeout(typeText, 50);
  } else {
    setTimeout(() => {
      memzScreen.style.display = "none";
      mainScreen.classList.remove("hidden");
      mainScreen.classList.add("show");
      startNyanLoop();
    }, 1500);
  }
}
typeText();

function startNyanLoop() {
  setInterval(() => {
    const cat = document.createElement("img");
    cat.src = "nyancats.gif";
    cat.className = "nyancat";
    cat.style.top = `${Math.random() * 80 + 10}%`;
    cat.style.left = "-100px";
    document.getElementById("nyancat-container").appendChild(cat);
    let pos = -100;
    const move = setInterval(() => {
      pos += 4;
      cat.style.left = `${pos}px`;
      if (pos > window.innerWidth) { clearInterval(move); cat.remove(); }
    }, 16);
  }, 1000);
}

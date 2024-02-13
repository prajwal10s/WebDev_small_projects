const maxPt = document.querySelector("#max-score");
let winScore = maxPt.value;
const p1 = {
  score: 0,
  button: document.querySelector("#p1-btn"),
  display: document.querySelector("#p1-score"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2-btn"),
  display: document.querySelector("#p2-score"),
};

let isGameOver = false;
const resetBtn = document.querySelector("#reset-btn");

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score == winScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.innerText = player.score;
  }
}
p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

resetBtn.addEventListener("click", reset);

maxPt.addEventListener("change", function () {
  winScore = maxPt.value;
  reset();
});

function reset() {
  p1.score = 0;
  p2.score = 0;
  p1.display.innerText = 0;
  p2.display.innerText = 0;
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");
  p1.button.disabled = false;
  p2.button.disabled = false;
  isGameOver = false;
}

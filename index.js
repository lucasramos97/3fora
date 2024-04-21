function init() {
  const answer = localStorage.getItem("answer");
  if (answer) {
    document.getElementById("form").style.display = "none";
    const text = document.getElementById("text-answer");
    text.innerHTML = `${answer} então 😉`;
    document.getElementById("div-answer").style.display = "block";
  }
}

function actionYes() {
  const answer = prompt("Dia e Hora", "Amanhã, 19h");
  if (!answer) {
    return;
  }
  localStorage.setItem("answer", answer);
  init();
}

function showText() {
  const text = document.getElementsByClassName("text")[0];
  text.style.display = "block";
  const emote = document.getElementById("emote");
  emote.innerHTML = "🤩";
}

function hideText() {
  const text = document.getElementsByClassName("text")[0];
  text.style.display = "none";
  const emote = document.getElementById("emote");
  emote.innerHTML = "🙂";
}

function runaway(id) {
  id.style.top = Math.round(Math.random() * 500) - 100 + "px";
  id.style.left = Math.round(Math.random() * 500) - 200 + "px";
  const emote = document.getElementById("emote");
  emote.innerHTML = "🥲";
}

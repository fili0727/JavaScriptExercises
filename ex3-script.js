console.log("Hej Gustav");

window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_container").addEventListener("click", jump);
  document.querySelector("#orange_container").classList.add("move");
}

function jump() {
  console.log("jump");
  document.querySelector("#orange_container").classList.add("jump");
}

function paused() {
  document.querySelector("#orange_container").classList.add("paused");
}

console.log("Hej Gustav");

window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_container").addEventListener("click", jump);
}
function move() {
  document.querySelector("#orange_container").classList.add("move");
}
move();

function paused() {
  document.querySelector("#orange_container").classList.add("paused");
}
function jump() {
  console.log("jump");
  paused();
  document.querySelector("#orange_container").classList.add("jump");
}

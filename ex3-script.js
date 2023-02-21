console.log("Hej Gustav");

window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_container").addEventListener("click", jump);
  document.querySelector("#orange_container").classList.add("move");
}

function jump() {
  document.querySelector("#orange_container").classList.add("paused");
  document.querySelector("#orange_sprite").classList.add("jump");
}

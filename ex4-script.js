console.log("Hej Gustav");

window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_container").addEventListener("click", jump);
}

function jump() {
  console.log("jump");
  document
    .querySelector("#orange_container")
    .removeEventListener("click", jump);
  document.querySelector("#orange_container").classList.remove("jump-once");
  document.querySelector("#orange_container").offsetLeft;
  document.querySelector("#orange_container").classList.add("jump-once");
}
function jumpreset() {
  document.querySelector("#orange_container").classList.remove("jump-once");
}

console.log("Hej Gustav");

window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_container").addEventListener("click", jump);
}

function jump() {
  console.log("jump");
  document.querySelector("#orange_container").classList.add("jump-once");
  document
    .querySelector("#orange_container")
    .removeEventListener("click", jump);
}

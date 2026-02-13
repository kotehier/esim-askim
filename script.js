
const area = document.getElementById("touchArea");

let isGoing = false;

area.addEventListener("click", goNext);
area.addEventListener("touchstart", goNext);

function goNext() {
  if (isGoing) return;
  isGoing = true;

  area.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "./ready/index.html";
  }, 800);
}

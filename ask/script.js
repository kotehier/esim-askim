let count = 0;

function moveNo(){
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  count++;

  let x = Math.random() * 150 - 75;
  let y = Math.random() * 60 - 30;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  let size = 18 + count * 4;
  yesBtn.style.fontSize = size + "px";

  if(count >= 5){
    noBtn.style.display = "none";
    yesBtn.style.left = "50%";
    yesBtn.style.transform = "translateX(-50%)";
  }
}

function yesClick(){
  window.location.href = "ask-success/";
}
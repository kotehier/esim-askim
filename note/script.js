const hearts = document.querySelector(".hearts");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const continueBtn = document.getElementById("continueBtn");

let opened = false;

function createHeart(){
  const h = document.createElement("span");
  h.innerText = "💌";
  h.style.left = Math.random()*100 + "vw";
  h.style.animationDuration = 5 + Math.random()*5 + "s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),10000);
}
setInterval(createHeart,600);

function openEnvelope(){
  if(opened) return;
  opened = true;

  envelope.classList.add("open");
  letter.classList.add("show");

  setTimeout(()=>{
    continueBtn.style.display = "inline-block";
  },5000);
}

function goNext(){
  window.location.href = "../music/"; 
}
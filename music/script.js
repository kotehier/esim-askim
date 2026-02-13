const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const rain = document.querySelector(".rain");
const overlay = document.getElementById("overlay");

document.body.classList.add("blur");

/* TIKLA BAŞLA */
overlay.addEventListener("click", ()=>{
  overlay.style.display = "none";
  document.body.classList.remove("blur");
  audio.play();
});

/* YAĞMUR */
function createRain(){
  const drop = document.createElement("span");
  drop.style.left = Math.random() * 100 + "vw";
  drop.style.animationDuration = (2 + Math.random() * 3) + "s";
  drop.style.opacity = Math.random();
  rain.appendChild(drop);

  setTimeout(()=>drop.remove(),5000);
}
setInterval(createRain,10);

/* AUDIO */
audio.onloadedmetadata = () => {
  duration.innerText = formatTime(audio.duration);
};

audio.ontimeupdate = () => {
  progress.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  current.innerText = formatTime(audio.currentTime);
};

function setProgress(e){
  const width = e.target.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
}

function formatTime(sec){
  let m = Math.floor(sec / 60);
  let s = Math.floor(sec % 60);
  if(s < 10) s = "0" + s;
  return m + ":" + s;
}

function goNext(){
  audio.pause();
  window.location.href = "../gallery/";
}
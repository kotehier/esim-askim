const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const rain = document.querySelector(".rain");

function createRain(){
  const drop = document.createElement("span");
  drop.style.left = Math.random() * 100 + "vw";
  drop.style.animationDuration = (2 + Math.random() * 3) + "s";
  drop.style.opacity = Math.random();
  rain.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 5000);
}

setInterval(createRain, 10);

audio.onloadedmetadata = () => {
  duration.innerText = formatTime(audio.duration);
};

audio.ontimeupdate = () => {
  progress.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  current.innerText = formatTime(audio.currentTime);
};

const playBtn = document.getElementById("playBtn");

function togglePlay(){
  if(audio.paused){
    audio.play();
    playBtn.innerText = "⏸";
  }else{
    audio.pause();
    playBtn.innerText = "▶️";
  }
}

audio.onended = () => {
  playBtn.innerText = "▶️";
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
  window.location.href = "../deep-note/";
}
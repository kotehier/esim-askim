const startHeart = document.getElementById("startHeart");
const explosion = document.getElementById("explosion");
const rain = document.getElementById("rain");
const textArea = document.getElementById("textArea");
const noteText = document.getElementById("noteText");
const continueBtn = document.getElementById("continueBtn");

const text = `Birtanem 🤍
Üç yıldır senin kalbinde atıyorum ve hâlâ ilk günkü gibi heyecanlıyım. Bu üç yılın nasıl geçtiğini gerçekten bilmiyorum; zaman seninle birlikte akıp gidiyor. Kalbinde yer bulmak, sevgine bu kadar yakın olmak bana tarifsiz bir mutluluk veriyor. Her anımız, her gülüşün, her bakışın benim için ayrı bir hatıra oldu.

Şubat bizim ayımız… Bu ayı ve bizi dibine kadar yaşayalım, anılar biriktirelim, gülmeye ve sevmeye doyalım. İyi ki varsın, iyi ki benimlesin.
Sevgililer Günümüz kutlu olsun 🥺💌`;

let index = 0;

function explodeHearts(){
  for(let i=0;i<90;i++){
    const h = document.createElement("span");
    h.innerText = "❤️";
    h.style.left = "50%";
    h.style.top = "50%";

    const x = (Math.random()*700 - 350) + "px";
    const y = (Math.random()*700 - 350) + "px";

    h.style.setProperty("--x", x);
    h.style.setProperty("--y", y);

    explosion.appendChild(h);

    setTimeout(()=>h.remove(),6000);
  }
}

function createRain(){
  const h = document.createElement("span");
  h.innerText = "💌";
  h.style.left = Math.random()*100 + "vw";
  h.style.animationDuration = 6 + Math.random()*4 + "s";
  rain.appendChild(h);
  setTimeout(()=>h.remove(),12000);
}

function typeWriter(){
  if(index < text.length){
    noteText.innerHTML += text[index] === "\n" ? "<br>" : text[index];
    index++;
    setTimeout(typeWriter,70);
  } else {
    continueBtn.style.display = "block";
  }
}

startHeart.addEventListener("click", ()=>{
  startHeart.style.display="none";

  explodeHearts();

  setTimeout(()=>{
    explosion.innerHTML = "";
    setInterval(createRain,450);

    setTimeout(()=>{
      textArea.style.display="block";
      requestAnimationFrame(()=> textArea.classList.add("show"));
      typeWriter();
    },1500);

  },6000);
});

function goNext(){
  window.location.href = "../music/";
}
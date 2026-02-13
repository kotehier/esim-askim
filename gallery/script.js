const counter = document.getElementById("counter");

// Başlangıç tarihi: 11 Şubat 2023, saat 03:00
const startDate = new Date("2023-02-11T03:00:00");

function updateCounter(){
  const now = new Date();
  let diff = now - startDate; // milisaniye cinsinden

  if(diff < 0) diff = 0;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000*60)) % 60;
  const hours = Math.floor(diff / (1000*60*60)) % 24;
  const days = Math.floor(diff / (1000*60*60*24));

  counter.innerText = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniyedir beraberiz 💖`;
}

// İlk yüklemede hemen göster
updateCounter();

// Her saniye güncelle
setInterval(updateCounter, 1000);

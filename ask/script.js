let count = 0;

const texts = [
  "Emin misin?",
  "Bak çok üzülürüm...",
  "Son kararın mı? 🥺",
  "Allahını",
  "Tm uzatma"
];

const question = document.getElementById("question");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("click", () => {
  if(count < texts.length){
    question.textContent = texts[count];
    count++;
  }

  if(count === texts.length){
    noBtn.style.display = "none";
    yesBtn.classList.add("centered");
  }
});

yesBtn.addEventListener("click", () => {
  yesBtn.classList.add("heart");  // kalp efekti
  setTimeout(() => {
    window.location.href = "/ask-success";
  }, 600);
});
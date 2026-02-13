let input = "";
const correct = "6617";

const loginBtn = document.getElementById("loginBtn");

updateLoginButton();

function pressNum(num){
  if(input.length < 4){
    input += num;
    updateDots();
  }
}

function delNum(){
  input = input.slice(0,-1);
  updateDots();
}

function updateDots(){
  document.getElementById("dots").innerText =
    input.padEnd(4,"-");

  updateLoginButton();
}

/* Giriş butonu aktif/pasif */
function updateLoginButton(){
  if(input.length === 4){
    loginBtn.classList.remove("disabled");
  } else {
    loginBtn.classList.add("disabled");
  }
}

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>{
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function checkPass(){
  if(input === correct){
    showScreen("successScreen");
  } else {
    showScreen("errorScreen");
  }
}

function retry(){
  input = "";
  updateDots();
  showScreen("loginScreen");
}

function goNext(){
  window.location.href = "/note";
}
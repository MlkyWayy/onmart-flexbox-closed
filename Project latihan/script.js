const kat = document.querySelectorAll(".kat-isi");
const buy = document.querySelectorAll("button");
const botNav = document.querySelectorAll(".container-setting li")

// SlideShow
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
// Akhir SlideShow

for(let i = 0; i < kat.length; i++){
    kat[i].addEventListener("click",function(){
    alert("Coming Soon");
});
}

for(let i = 0; i < buy.length; i++){
    buy[i].addEventListener("click",function(){
    alert("Coming Soon");
});
}

for(let i = 0; i < 3; i++){
    botNav[i].addEventListener("click",function(){
    alert("Coming Soon");
});
}

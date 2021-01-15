const hai = document.querySelector(".hero p");
const kat = document.querySelectorAll(".kat-isi");
const buy = document.querySelectorAll("button");
const botNav = document.querySelectorAll(".container-setting li")

hai.addEventListener("click",function(){
    alert("Coming Soon");
});

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
    alert("In Progress");
});
}


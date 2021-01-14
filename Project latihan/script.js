const hai = document.querySelector(".hero p");
const iAja = document.querySelectorAll(".kat-isi");

hai.addEventListener("click",function(){
    alert("Coming Soon");
});

for(let i = 0; i < iAja.length; i++){
    iAja[i].addEventListener("click",function(){
    alert("Coming Soon");
});
}

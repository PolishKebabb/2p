const btn = document.querySelector("button");
var img = document.querySelector("img")

function ustawRamke(){
    let color = document.getElementById("kolor").value;
    let grubosc = document.getElementById("grubosc").value;

    img.style.borderColor = color;
    img.style.borderWidth = grubosc + "px";
}

btn.addEventListener('click', function (){
    ustawRamke(img);
})
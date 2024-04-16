const btn = document.querySelector("button");

btn.addEventListener('click', function (){
    let ocena = document.querySelector("#ocena").value;
    let kolor = document.querySelector("#kolor").value;

    let naglowek = document.querySelector("h1");
    naglowek.style.color = kolor;

});

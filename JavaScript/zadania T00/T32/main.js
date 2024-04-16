const btn = document.querySelector("button");

btn.addEventListener('click', function (){
    let ocena = document.querySelector("#ocena").value;
    let kolor = document.querySelector("#kolor").value;
    let data = document.querySelector("#data").value;

    let naglowek = document.querySelector("h1");
    naglowek.style.color = kolor;

    let ocena2 = document.querySelector("#ocena2");
    ocena2.innerHTML = `${ocena}`;
    let kolor2 = document.querySelector("#kolor2");
    kolor2.style.color = kolor;

    let data2 = document.querySelector("#data2");
    data2.innerHTML = `${data}`

});

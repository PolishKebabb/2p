const btn_indigo = document.querySelector("#indigo");
const btn_sblue = document.querySelector("#steelblue");
const btn_olive = document.querySelector("#olive");

btn_indigo.addEventListener('click', function (){
   const tlo = document.querySelector("#prawy");
   tlo.style.backgroundColor = "Indigo"
});

btn_sblue.addEventListener('click', function (){
    const tlo = document.querySelector("#prawy");
    tlo.style.backgroundColor = "SteelBlue"
});

btn_olive.addEventListener('click', function (){
    const tlo = document.querySelector("#prawy");
    tlo.style.backgroundColor = "Olive"
});
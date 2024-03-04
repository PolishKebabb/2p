const btn = document.querySelector('button');
let dlugosc = document.getElementById('dlugosc');
dlugosc = dlugosc.value;
let znaki = [];
btn.addEventListener('click', function() {
    let znakiInput = document.getElementById('znaki');
    let lancuch = znakiInput.value;

    znaki = lancuch.split('');

    console.log(znaki);
    console.log(dlugosc)
});
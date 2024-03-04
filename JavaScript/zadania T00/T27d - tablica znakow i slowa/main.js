const btn = document.querySelector('button');
let znaki = [];
btn.addEventListener('click', function() {
    let znakiInput = document.getElementById('znaki');
    let lancuch = znakiInput.value;
    let dloogosc = document.getElementById('dlugosc');
    let dloogosc = dloogosc.value;

    znaki = lancuch.split('');

    console.log(znaki);
    console.log(dloogosc);
});
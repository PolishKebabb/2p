const liczba1 = document.querySelector('#dlugosc');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let a = parseFloat(liczba1.value);
        let b = a * 25.3995;


    wynik.innerHTML = `Dlugosc w mm = ${b}`
})
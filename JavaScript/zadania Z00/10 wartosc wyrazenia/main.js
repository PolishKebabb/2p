const liczba1 = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let x = parseFloat(liczba1.value);
        let b = Math.pow(x,2);
        let c = b


    wynik.innerHTML = `Dlugosc w mm = ${b}`
})
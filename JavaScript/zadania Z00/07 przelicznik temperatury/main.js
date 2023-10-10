const liczba1 = document.querySelector('#temperatura');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let a = parseFloat(liczba1.value);
        let b = a*1.8+32;
        let c = a+273.15;


    wynik.innerHTML = `Temperatura w Fahrenheitach = ${b}<br>
                       Temperatura w Kelwinach = ${c}`
})
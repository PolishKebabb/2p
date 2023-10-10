const liczba1 = document.querySelector('#czas');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let a = parseFloat(liczba1.value);
        let b = a/3600;
        let c = b%a;

    wynik.innerHTML = ` ${b.toFixed()} godzin <br>
                        ${c} minut <br>
                        ${a}`

})
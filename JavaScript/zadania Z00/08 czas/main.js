const liczba1 = document.querySelector('#czas');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let x = parseInt(liczba1.value)
        let a = Math.floor(x / 3600);
        let b = x % 3600;
        let c = Math.floor (b / 60) ;
        let d = b % 60;

    wynik.innerHTML = ` ${a} godzin <br>
                        ${c} minut <br>
                        ${d} sekund <br>
                        `

})
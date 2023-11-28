const liczba1 = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let a = parseInt(liczba1.value);

        switch (a){
                case 1:
                        wynik.innerHTML = `poniedzialek`;
                        break;
                case 2:
                        wynik.innerHTML = `wtorek`;
                        break;
                case 3:
                        wynik.innerHTML = `środa`;
                        break;
                case 4:
                        wynik.innerHTML = `czwartek`;
                        break;
                case 5:
                        wynik.innerHTML = `piatek`;
                        break;
                case 6:
                        wynik.innerHTML = `sobota`;
                        break;
                case 7:
                        wynik.innerHTML = `niedziela`;
                        break;


                        wynik.innerHTML = `błąd`;
                        break;

        }



})
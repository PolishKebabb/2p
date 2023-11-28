const liczba1 = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let a = Math.floor(parseInt(liczba1.value)/10);

        switch (a){
                case 1:
                case 2:
                case 3:
                case 4:
                        wynik.innerHTML = `ocena studenta wynosi: 2`;
                        break;
                case 5:
                        wynik.innerHTML = `ocena studenta wynosi: 3`;
                        break;
                case 6:
                        wynik.innerHTML = `ocena studenta wynosi: 3.5`;
                        break;
                case 7:
                        wynik.innerHTML = `ocena studenta wynosi: 4`;
                        break;
                case 8:
                        wynik.innerHTML = `ocena studenta wynosi: 4.5`;
                        break;
                case 9:
                        wynik.innerHTML = `ocena studenta wynosi: 5`;
                        break;
                case 10:
                        wynik.innerHTML = `ocena studenta wynosi: 5`;
                        break;

        }



})
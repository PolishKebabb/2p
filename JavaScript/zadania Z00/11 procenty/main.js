const liczba1 = document.querySelector('#a');
const liczba2 = document.querySelector('#procent');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let a = parseInt(liczba1.value);
        let b = parseInt(liczba2.value);
    let c = (a * b) / 100;


    wynik.innerHTML = `wynik = ${c} `
})
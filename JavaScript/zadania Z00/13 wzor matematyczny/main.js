const liczba1 = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let x = parseInt(liczba1);
        let wyrazenie = Math.sqrt(Math.abs(x)*x*(x/(1+Math.pow(x,2))-2));


    wynik.innerHTML = `wartość wyrazenia = ${wyrazenie}`
})
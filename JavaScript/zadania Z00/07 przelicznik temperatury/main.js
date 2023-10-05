const liczba1 = document.querySelector('#A');
const liczba2 = document.querySelector('#B');
const liczba3 = document.querySelector('#C');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let a = parseFloat(liczba1.value);
        let b = parseFloat(liczba2.value);
        let c = parseFloat(liczba3.value);
        let p = 0.5*(a+b+c);
    let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));

    wynik.innerHTML = `a = ${a}<br>
                       b = ${b}<br>
                       c = ${c}<br>
                       pole wynosi = ${s}`

})
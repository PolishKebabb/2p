const liczba1 = document.querySelector('#A');
const liczba2 = document.querySelector('#B');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseInt(liczba1.value);
    let b = parseInt(liczba2.value);
    let suma = a+b;
    let roznica = a-b;
    let iloczyn = a*b;
    let iloraz = a/b;

    wynik.innerHTML = 'A =  '+a+'<br>B = '+b+
        '<br>Suma = '+suma+
        '<br>Roznica = '+roznica+
        '<br>Iloczyn = '+iloczyn+
        '<br>Iloraz = '+iloraz.toFixed(2);


})
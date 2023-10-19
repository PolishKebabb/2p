const liczba1 = document.querySelector('#a');
const liczba2 = document.querySelector('#b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let a = parseInt(liczba1.value);
        let b = parseInt(liczba2.value);

        let p1 = Math.floor(Math.random()*(b-a+1))+a;
        let p2 = Math.floor(Math.random()*(b-a+1))+a;
        let p3 = Math.floor(Math.random()*(b-a+1))+a;
        let p4 = Math.floor(Math.random()*(b-a+1))+a;
        let p5 = Math.floor(Math.random()*(b-a+1))+a;

        let suma = p1+p2+p3+p4+p5;
        let iloczyn = p1*p2*p3*p4*p5;
        let srednia = p1+p2+p3+p4+p5/5;

    wynik.innerHTML = ` p1 = ${p1} <br>
                        p2 = ${p2} <br>
                        p3 = ${p3} <br>
                        p4 = ${p4} <br>
                        p5 = ${p5} <br>

                       suma: ${p1} + ${p2} + ${p3} + ${p4} + ${p5} = ${suma} <br>
                       iloczyn: ${p1} * ${p2} * ${p3} * ${p4} * ${p5} = ${iloczyn} <br>
                       srednia: (${p1} + ${p2} + ${p3} + ${p4} + ${p5}) / 5 = ${srednia}`
})
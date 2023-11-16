const liczba1 = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        let a = parseInt(liczba1.value);
        a = a.toFixed(1);

        let q1 = a * 1;
        let q2 = a * 2;
        let q3 = a * 3;
        let q4 = a * 4;
        let q5 = a * 5;
        let q6 = a * 6;
        let q7 = a * 7;
        let q8 = a * 8;
        let q9 = a * 9;
        let q10 = a * 10;

    wynik.innerHTML = ` a = ${a} <br>
                        1 x ${a} = ${q1}<br>
                        2 x ${a} = ${q2}<br>
                        3 x ${a} = ${q3}<br>
                        4 x ${a} = ${q4}<br>
                        5 x ${a} = ${q5}<br>
                        6 x ${a} = ${q6}<br>
                        7 x ${a} = ${q7}<br>
                        8 x ${a} = ${q8}<br>
                        9 x ${a} = ${q9}<br>
                        10 x ${a} = ${q10}<br>`
})
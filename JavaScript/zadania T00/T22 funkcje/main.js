const wynik = document.querySelector('#wynik');

let a = -3;
let x = 2;
let y = 3;

let wartoscBezwzgledna1 = bezwzgledna1(a);
let wartoscBezwzgledna2 = bezwzgledna2(a);

let potega = doPotegi(x,y);

wynik.innerHTML = `Zadanie t22_1 <br><br>
wartość bezwgledna z ${a} = ${wartoscBezwzgledna1} (pierwszy sposob)
 <br> |a| = ${wartoscBezwzgledna2} (drugi sposob) <br><br>

Zadanie t22_2 <br><br>
x = ${x} <br>
y = ${y} <br>
`

const wynik = document.querySelector('#wynik');

let a = -3;
let x = 2;
let y = 6;

let wartoscBezwzgledna1 = bezwzgledna1(a);
let wartoscBezwzgledna2 = bezwzgledna2(a);
let potega = doPotegi(x,y);
let miesiac = nazwa_miesiaca(x);
let dzielnik = wspolny_dzielnik(x, y);


document.write(`<h1>Zadanie t22_1</h1> <br>
wartość bezwgledna z ${a} = ${wartoscBezwzgledna1} (pierwszy sposob)
 <br> |a| = ${wartoscBezwzgledna2} (drugi sposob) <br><br>

<h1>Zadanie t22_2</h1>  <br>
x = ${x} <br>
y = ${y} <br>
x<sup>y</sup> = ${x}<sup>${y}</sup> = ${potega}<br>

<h1>Zadanie t22_3</h1> <br>
podana liczba: ${x} <br>
miesiac: ${miesiac} <br>

<h1>Zadanie t22_4</h1> <br>
`);

porownywanie_wkolorze(x,y);

document.write(`<h1>Zadanie t22_5</h1> <br> 
dzielnik liczb ${x} i ${y} wynosi = ${dzielnik}`)


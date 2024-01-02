const wynik = document.querySelector('#wynik');

let a = -3;
let x = 2;
let y = 3;

let wartoscBezwzgledna1 = bezwzgledna1(a);
let wartoscBezwzgledna2 = bezwzgledna2(a);

wynik.innerHTML = `wartość bezwgledna z ${a} = ${wartoscBezwzgledna1} (pierwszy sposob)
 <br> |a| = ${wartoscBezwzgledna2} (drugi sposob)`

let tab = [];

let znaki = ["a", "b", "c", "d", "e"];

for (let i = 0; i < 7; i++) {
    let wiersz= [];
    for (let j = 0; j < 7; j++) {
        let n = Math.floor(Math.random()*5);
        const losuj = znaki[n];
        wiersz.push(losuj);
    }
    tab.push(wiersz)
}

document.write(tab);

let ile_a = 0;
for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length; j++) {
        if (tab[i][j] === 'a') {
            ile_a++;
        }
    }
}

document.write("<br>Literka a wystepuje " + ile_a + " razy");

let ile_b = 0;
let liczbawWierszu = [];
for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length; j++) {
        if (tab[i][j] === 'b') {
            ile_b++;
        }
    }
    liczbawWierszu[i] = ile_b;
}

console.log(liczbawWierszu);

let  najwieksza_liczbaB = 1;
let indexNajwieksza_liczbaB = 0;

for (let i = 1; i < 7; i++) {
    if (liczbawWierszu[i] > najwieksza_liczbaB) {
        najwieksza_liczbaB = liczbawWierszu[i];
        indexNajwieksza_liczbaB = i;
    }
}
document.write("<br>Najwieksza liczba b znajduje sie w wierszu: " + indexNajwieksza_liczbaB);
let n = prompt("podaj n: ");
let tablica = [];
let max = 0;

for (let i = 0; i < n; i++) {
    tablica.push(Math.random(0,1).toFixed(2));
}

document.write(tablica);

for (let i = 1; i < n; i++) {
    if (tablica[i] > max) {
        max = tablica[i];
    }
}

document.write("<br>Wartosc maksymalna: " + max)

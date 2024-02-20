let tab = [];

for (let i = 0; i < 3; i++) {
    tab[i] = [];
    for (let j = 0; j < 3; j++) {
        tab[i][j] = tab.push(Math.floor(Math.random()*10));
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        document.write(tab[i][j] + " ");
    }
}


let przekatna_LG_PD = parseInt(tab[0][0]) + parseInt(tab[1][1]) + parseInt(tab[2][2]);
document.write("<br>Suma przekatnej LG-PD: " + przekatna_LG_PD + "<br>");

let przekątna_LD_PG = parseInt(tab[2][0]) + parseInt(tab[1][1]) + parseInt(tab[0][2])
document.write("Suma przekatnej LD-PG: " + przekątna_LD_PG);


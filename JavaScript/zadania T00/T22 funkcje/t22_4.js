function porownywanie_wkolorze(a, b){
    if(a > b) {
        document.write(`<span style="color: green;">${a}</span> > `);
        document.write(`<span style="color: red;">${b}</span>`);
    }
    else if (b > a) {
        document.write(`<span style="color: red;">${b}</span> > `);
        document.write(`<span style="color: green;">${a}</span>`);
    }
    else if (a == b){
        document.write(`<span style="color: blue;">${a}</span> = `);
        document.write(`<span style="color: blue;">${b}</span>`);
    }

}
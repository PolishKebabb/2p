const rodzaj = document.querySelector(`#rodzaj` );
const ilelitrów = document.querySelector(`#ilelitrów`)
const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector(`button`);

btn.addEventListener('click', function (){
    let rodz = parseInt(rodzaj.value);
    let ile = parseInt(ilelitrów.value)
    let koszt = 0;

    if ((rodz === 1 || rodz === 2) && ile >= 0) {
        if (rodz === 1)
            koszt = ile * 4;
        else if (rodz === 2)
            koszt = ile * 3.5;
        wynik.innerHTML = `koszt paliwa: ${koszt} zł`;
    }
    else
        wynik.innerHTML = `wybrano złe wartości`;
})

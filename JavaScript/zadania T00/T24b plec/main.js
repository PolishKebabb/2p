const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {

    let imie = document.querySelector(`#imie`).value.toLowerCase();
    let plec;

    if(imie.endsWith("a") && imie !== "kuba" && imie !== "barbara")
        plec = "kobieta"
    else
        plec = "mezczyzna"

    wynik.innerHTML = `twoja plec to ${plec}`
})
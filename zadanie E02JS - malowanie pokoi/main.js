const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener('click', function(){

    let a = document.querySelector("#powierzchnia_malowania").value
    let liczba_puszek = a/4;

    liczba_puszek = Math.ceil(liczba_puszek)

    wynik.innerHTML = `Liczba potrzebnych puszek: ${liczba_puszek}`

})
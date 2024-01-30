const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function() {

    const urodziny1 = new Date(document.querySelector(`#pierwszy`).value)
    const urodziny2 = new Date(document.querySelector(`#drugi`).value)

    const imie1 = document.querySelector(`#imie1`).value
    const imie2 = document.querySelector(`#imie2`).value

    if(urodziny1.getTime() < urodziny2.getTime()){
        wynik.innerHTML = `${imie1} jest starszy niz ${imie2}`
    }
    else if(urodziny1.getTime() > urodziny2.getTime()){
        wynik.innerHTML = `${imie2} jest starszy niz ${imie1}`
    }
    else
        wynik.innerHTML = `Sa w tym samym wieku`
});

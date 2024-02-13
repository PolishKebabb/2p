const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function() {

    var komputer = {
        karta: "RTX 4070",
        cpu: "Intel Core i9",
        ram: 16,
        chlodzenie: "wodne",
        pokaz: function() {
            document.write(this.karta + ' ' + this.cpu);
        }
    }

    wynik.innerHTML = `${komputer.pokaz()}`;
});

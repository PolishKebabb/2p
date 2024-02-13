const wynik = document.querySelector('#wynik');

    function Klient(nazwisko_k, imie_k, zawod_k) {
        this.nazwisko = nazwisko_k;
        this.imie_k = imie_k;
        this.zawod = zawod_k;
        this.wypisz = function() {
            document.write('Nazwisko klienta: ' + this.nazwisko + '<br>Imię klienta: ' + this.imie_k + '<br> Zawod klienta: ' + this.zawod + '<br><br>');
        }
    }

    function Zwierzak(gatunek, imie_z, wlasciciel) {
        this.gatunek = gatunek;
        this.imie_z = imie_z;
        this.wlasciciel = wlasciciel;
        this.wypisz = function() {
            document.write('Imie zwierzecia: ' + this.imie_z + '<br> Gatunek: ' + this.gatunek + '<br> Nazwisko wlasciciela: ' + this.wlasciciel);
        }
    }


    var osoba1 = new Klient('Kowalski', 'Jan', 'kierowca');
    var zwierze1 = new Zwierzak('kot', 'Osama', osoba1.nazwisko);

    osoba1.wypisz();
    zwierze1.wypisz();


const wynik = document.querySelector('#wynik');

    function Czolg(nazwa, iloscnaboi, kolor){
        this.nazwa = nazwa,
        this.iloscnaboi = iloscnaboi,
        this.kolor = kolor
        this.info = function (){
            document.write("Jestem czolgiem i nazywam sie: " + nazwa + "<br>")
            document.write("kolor: " + kolor + "<br>")
            document.write("amunicja: " + iloscnaboi + "<br>")
        }
        this.pomaluj = function (malowanie){
            this.kolor = malowanie;
            document.write("Pomalowalem czolg na kolor: " + kolor + "<br>")
        }
        this.zaladuj = function (a){
            iloscnaboi = iloscnaboi+a;
            document.write("Zaladowalem czolg " + a + " nabojami" + "<br>");
            if (iloscnaboi < 0)
                iloscnaboi = 0;
        }
        this.wystrzel = function (){
            if (iloscnaboi > 0) {
                document.write("BUUUUUUUUUUUUUM" + "<br>");
                iloscnaboi--;
                document.write("Pozostale naboje: " + iloscnaboi)
            }
            else
                document.write("brak naboi");
        }
    }

    let panzerkampfwagen = new Czolg("PANZERKAMPFWAGEN", 3, "zielony");

    panzerkampfwagen.info();
    panzerkampfwagen.pomaluj("niebieski");
    panzerkampfwagen.zaladuj(3);
    panzerkampfwagen.wystrzel();




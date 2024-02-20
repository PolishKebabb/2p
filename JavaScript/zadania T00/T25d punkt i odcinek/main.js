
    function Punkt(nazwa, x, y) {
        this.nazwa = nazwa;
        this.x = x;
        this.y = y;
        this.info = function (){
            document.write("nazwa: " + nazwa + "<br>")
            document.write("x: " + x + "<br>")
            document.write("y: " + y + "<br>")
        }
    }

    function Odcinek(punktPocz, punktKonc){
        this.punktPocz = punktPocz;
        this.punktKonc = punktKonc;
        this.dlugoscOdcinka = function (){
            let wynik = punktKonc - punktPocz;
            wynik = parseInt(wynik);
            document.write("Dlugosc odcinka wynosi: " + wynik);
        }
        this.info = function (){
            document.write("punkt poczatkowy: " + punktPocz + "<br>")
            document.write("punkt koncowy: " + punktKonc + "<br>")
        }
    }

    var punkt1 = new Punkt("Punkt pierwszy", 3, 10);
    var odcinek1 = new Odcinek(punkt1.x, punkt1.y);

    punkt1.info();
    odcinek1.dlugoscOdcinka();

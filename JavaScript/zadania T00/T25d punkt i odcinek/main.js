
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

        }
        this.info = function (){
            document.write("punkt poczatkowy: " + punktPocz + "<br>")
            document.write("punkt koncowy: " + punktKonc + "<br>")
        }
    }

    var punkt1 = new Punkt("Punkt pierwszy")



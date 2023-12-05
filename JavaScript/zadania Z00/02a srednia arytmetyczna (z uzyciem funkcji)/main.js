let a = prompt ("podaj liczbe a: ");
a = parseInt(a);
let b = prompt ("podaj liczbe b: ");
b = parseInt(b);
let c = prompt ("podaj liczbe c: ");
c = parseInt(c);
let d = prompt ("podaj liczbe d: ");
d = parseInt(d);


let srednia = srednia_arytmetyczna(a,b,c,d);

let s = suma(a,b,c,d);

document.write("a: "+a+"<br> b: "+b+"<br> c: "+c+"<br> d: "+d+"<br>")
document.write("<b>suma: "+s+"</b><br>")
document.write("<b>Średnia: "+srednia+"</b><br>");
document.write("<b>Średnia zaokraglona: "+srednia.toFixed(2)+"</b>");
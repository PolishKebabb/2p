let a = prompt ("podaj liczbe a: ", "0");
a = parseInt(a);
let b = prompt ("podaj liczbe b: ", "0");
b = parseInt(b);
let c = prompt ("podaj liczbe c: ", "0");
c = parseInt(c);
let d = prompt ("podaj liczbe d: ", "0");
d = parseInt(d);

let iloczyn = a*b*c*d;
let srednia = Math.pow(iloczyn, 0.25);

document.write("a: "+a+"<br> b: "+b+"<br> c: "+c+"<br> d: "+d+"<br>")
document.write("<strong>Średnia geometryczna wynosi: "+srednia+"<br></strong>");
document.write("<strong>Średnia geometryczna, zaokrąglona wynosi: "+srednia.toFixed(2)+"</strong>");

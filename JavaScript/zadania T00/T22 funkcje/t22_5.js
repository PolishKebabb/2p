function wspolny_dzielnik(a,b){
    if (a == b) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    else
        return a;
}
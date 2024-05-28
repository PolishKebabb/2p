const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let a = parseInt(document.querySelector('#a').value);
    let b = parseInt(document.querySelector('#b').value);

    function schemat(a, b){
        while (a !== b) {
            if (a > b)
                a = a - b;
            else if (a < b)
                b = b - a;
        }
        return a;
    }

    console.log(schemat(a, b))
    wynik.innerHTML = `Wynik: ${schemat(a,b)}`

})
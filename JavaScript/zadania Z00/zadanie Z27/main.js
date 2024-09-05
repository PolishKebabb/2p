const btn = document.querySelector("button")
const wyn = document.querySelector("#wynik")

btn.addEventListener('click', function (){
    let x1 = document.querySelector("#x1").value
    let y1 = document.querySelector("#y1").value
    let x2 = document.querySelector("#x2").value
    let y2 = document.querySelector("#y2").value
    let x3 = document.querySelector("#x3").value
    let y3 = document.querySelector("#y3").value


    let odl1 = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))
    let odl2 = Math.sqrt(Math.pow(x2-x3, 2) + Math.pow(y2-y3, 2))
    let odl3 = Math.sqrt(Math.pow(x1-x3, 2) + Math.pow(y1-y3, 2))

    wyn.innerHTML = `Odległość między P1 a P2 wynosi: ${odl1}<br>
                     Odległość między P2 a P3 wynosi: ${odl2}<br>
                     Odległość między P1 a P3 wynosi: ${odl3}<br>`

})
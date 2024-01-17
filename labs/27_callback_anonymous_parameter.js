//contoh callback function menggunakan anonymous function dengan parameter

function kaliBiasa(x,y){
    console.log("HASIL KALI BIASA: "+ (x*y))
}
const kaliArrow =(x,y)=>{
    console.log("HASIL KALI BIASA: "+ (x*y))
}

function contohCallback(operasi, a, b){
    operasi(a,b)
}
contohCallback(kaliBiasa, 10,20);
contohCallback(kaliBiasa, 11,22);
contohCallback(
    function(a,b){
        console.log("hasil anonim biasa: "+(a*b));
    },10,2
)

contohCallback(
    (a,b)=>{
        console.log("hasil anonim arrow: "+(a*b));
    },20,2
)
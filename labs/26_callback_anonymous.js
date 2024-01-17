//contoh callbakc function menggunakan anonymous function

function Halo(){
    console.log("Halo, ini hanya function biasa");
}

const haloArrow =()=>{
    console.log("haloooooooo")
}
function callBackfunction(operasi){
    operasi();
}
callBackfunction(Halo);
callBackfunction(haloArrow);
callBackfunction(
    function(){
        console.log("halo ini function anonim")
    }
)
callBackfunction(
    () =>{
        console.log("halo ini anonim juga")
    }
)

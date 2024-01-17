//PROJECT 1 = project1.js

//ALGORITMA MENGHITUNG TOTAL BELANJA DAN KEMBALIAN (KASIR)
// SWITCH CASE, VARIABEL, TIPE DATA, DLL




let uang = 20000
let totalBarang = 2000
let kembalian = uang - totalBarang

console.log("uang" + uang )
console.log("totalBarang" + totalBarang )
console.log("hasil" + kembalian )

switch(true){
    case kembalian <0:
        console.log("uang barang")
        break;
        case kembalian===0:
            console.log("uang pas")
            break;
            default:
                console.log(kembalian)
                break;
}
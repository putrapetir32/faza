
//function biasa
function kaliBiasa(a, b){
    return (a * b);
}


//arrow function
let kaliArrow = (a,b) => {
    return (a * b);
}

//arrow function secara implist return 
let kaliArrowlagi = (a,b)=> (a * b);

let hasilSatu = kaliBiasa(2,2);
let hasilDua = kaliArrow(5,3);
let hasilTiga = kaliArrowlagi(6,3);

console.log("Hasil Satu : "+ hasilSatu);
console.log("Hasil Dua : "+ hasilDua);
console.log("Hasil Tiga : "+ hasilTiga);
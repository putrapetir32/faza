//contoh callback function dengan parameter
function Kali(a, b){
    console.log('Hasil perkalian '+ a +' x ' + b + '= '+ (a*b));
}

function Tambah(a, b){
    console.log('Hasil penjumlahan '+ a +' + ' + b + '= '+ (a+b));
}

function Kurang(a, b){
    console.log('Hasil pengurangan '+ a +' - ' + b + '= '+ (a-b));
}

function Bagi(a, b){
    console.log('Hasil pembagian '+ a +' :  ' + b + '= '+ (a/b));
}




function Kalkulator(operasi, a,b){
    operasi(a,b);
}




Kalkulator(Kali, 7 , 8);
Kalkulator(Tambah, 7 , 8);
Kalkulator(Kurang, 7 , 8);
Kalkulator(Bagi, 7 , 8);
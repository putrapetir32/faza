//cara 1 penulisan variable angka di luar scope

angka=10;

{
    angka=11;
}
console.log('Angka ini ada di luar SCOPE:' +angka);
console.log('angka ini ada di dalam SCOPE:' +angka);   

//cara ke 2 di luar
var angkaLagi=12;

//cara kedua di dalam
{
    var angkaLagi=13;
}
console.log('Angka ini ada diluar scope:' +angkaLagi);
console.log('Angka ini berada di dalam scope:'+angkaLagi)


let angkaLainjuga=14;
{
    let angkaLainjuga=15;
    console.log('Angka ini di dalam scope:'+angkaLainjuga);
}
console.log('Angka ini di luar scope:'+angkaLainjuga);
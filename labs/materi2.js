let Mahasiswa =[
    {nama: 'Icat', usia : 19},
    {nama: 'Cibenk', usia : 23},
    {nama: 'Ijam', usia : 25},
    {nama: 'Putra', usia : 13},
];

function filterusia(Mahasiswa){
    return Mahasiswa.filter((m) => m.nama > 20);
}

let MahasiswaDiatas20 = filterusia(Mahasiswa);
console.log(MahasiswaDiatas20)
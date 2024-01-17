//contoh objek sederhana
let karyawan ={
    nip: '123',
    nama: 'cibenk starboy max',
    alamat: 'pamulank sonoan dikit'

};

console.log("nip     :"+karyawan.nip);
console.log("nama     :"+karyawan.nama);
console.log("alamat    :"+karyawan.alamat);

//contoh object yg kompleks
let pegawai={
    nip: '111',
    nama: 'aldy sadboy max',
    alamat:{
        jalan: "jl.hedon budget pelajar",
        kelurahan: "kirian",
        kecamatan: "ga hedon ga temen",
        kota: "balapan",


    },
    
    

};

console.log("nip     :"+pegawai.nip);
console.log("nama     :"+pegawai.nama);
console.log("alamat    :"+pegawai.alamat);
console.log("jalan    :"+pegawai.alamat.jalan);
console.log("kecamatan     :"+pegawai.alamat.kecamatan);
console.log("kelurahan    :"+pegawai.alamat.kelurahan);
console.log("kota    :"+pegawai.alamat.kota);



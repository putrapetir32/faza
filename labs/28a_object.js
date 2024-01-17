


let mahasiswa ={
    nis: "2213",
    nama: "putra mullet",
    alamat: "terminal pondok cabe",
    ipk: 3.0,
}

console.log("nis     :"+mahasiswa.nis)
console.log("nama     :"+mahasiswa.nama)
console.log("alamat     :"+mahasiswa.alamat)
console.log("ipk     :"+mahasiswa.ipk)




if(mahasiswa.ipk <= 4.0){
    keterangan= "nilai anda sangat baik"
}else if (mahasiswa.ipk <= 3.0){
    ketrangan="nilai anda sudah cukup baik"
}else if (mahasiswa.ipk <= 2.0){
    keterangan="anda membutuhkan bimbingan"
}else if (mahasiswa.ipk <= 1.0){
    keterangan="silahkan konsul ke penguji anda"
}else{
    keterangan="mungkin anda tidak mengikuti ujian"

}

console.log(`ipk anda ${mahasiswa.ipk}`,`Dengan keterangan ${keterangan}`);


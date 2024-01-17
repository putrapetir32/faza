let indomie = {
    bumbu:"", 
    saos:"",
    toping:"",
    rasa:"",
}

function tambah_toping(nama_toping, indomie){
    indomie.toping = nama_toping;
}

function tambah_bumbu(nama_bumbu, ){
    indomie.bumbu = nama_bumbu;
}

function tambah_rasa(nama_rasa, indomie){
    indomie.rasa = nama_rasa;
}
function tambah_saos(nama_saos, indomie){
    indomie.saos = nama_saos;
}

rasa("goreng", indomie)
tambah_bumbu("penyedap rasa", indomie)
tambah_toping("sosis baso sawi bawang goreng", indomie)
tambah_saos("saos sambal kecap", indomie)
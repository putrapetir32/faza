//lemari adalah global scope
var lemari = "Lemari Gede" //variabel global yg bisa di akses dari mana aja

function bukaLaci(){
    //laci adalah function scope
    var laci ="Laci Kecil"; //variabel lokal yg hanya bisa di akses dari dalam fungsi
    console.log(lemari);
    console.log(laci);

    if(true){
        //label adalah block scope
        let label = "label merah" //variabel yg hanya bisa di akses dari dalam bloc

        console.log(lemari);//dapat mengakses variabel global
        console.log(laci);//dapat mengakses variabel lokal
        console.log(label);// dapat mengakses variabel block

        
    }
        console.log(lemari);//dapat mengakses variabel global
        console.log(laci);//dapat mengakses variabel lokal
        console.log(label);// dapat mengakses variabel block
}
       
bukaLaci();
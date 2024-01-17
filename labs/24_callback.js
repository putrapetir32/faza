
//contoh callback function tanpa parameter
function contohCallback(x){
    console.log("====CALLBACK====");
    x();
}


function f1(){
    console.log('ini f1...')

}

contohCallback(f1);

function f2(){
    console.log('ini f2...')

}

contohCallback(f2);

function f3(){
    console.log('ini f3...')

}

contohCallback(f3);

function f4(){
    console.log('ini f4...')

}

contohCallback(f4);


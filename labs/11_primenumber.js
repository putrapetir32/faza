for (let i = 0; i <=20; i++){
    let flag = 0

    for (let j = 2; j < i; j++) {
        if (i % j == 0){
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0){
        console.log(i+ '= memang angka prima')
    }else{
        console.log(i+' = bukan angka prima')
    }

}
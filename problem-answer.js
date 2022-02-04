

// Problem : 1 >> anaToVori
function anaToVori(ana){
    if(typeof ana != "number"){
        console.log("Please enter a valid ana as a number!");
    }
    // 16 ana == 1 vori
    const vori = ana / 16;
    return vori;
}
console.log(anaToVori(32));


// Problem : 2 >> pandaCost
function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity){
    if(typeof singaraQuantity != "number"){
        console.log("Please enter a valid singara quantity as a number");
    }
    if(typeof samuchaQuantity != "number"){
        console.log("Please enter a valid samucha quantity as a number");
    }
    if(typeof jilapiQuantity != "number"){
        console.log("Please enter a valid jilapi quantity as a number");
    }
    let singaraPrice = singaraQuantity * 7;
    let samuchaPrice = samuchaQuantity * 10;
    let jilapiPrice = jilapiQuantity * 15;
    // total food price
    const totalPrice = singaraPrice + samuchaPrice + jilapiPrice;
    return totalPrice;
}
console.log(pandaCost(10, 0, 0));


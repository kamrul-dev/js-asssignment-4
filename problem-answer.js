

// Problem : 1 >> anaToVori
function anaToVori(ana){
    if(typeof ana != "number"){
        console.log("Please enter a valid number!");
    }
    // 16 ana == 1 vori
    let vori = ana / 16;
    return vori;
}
console.log(anaToVori(16));

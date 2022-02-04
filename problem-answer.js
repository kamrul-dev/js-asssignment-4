

// Problem : 1 >> anaToVori
function anaToVori(ana) {
    if (typeof ana != "number") {
        console.log("Please enter a valid ana as a number!");
    }
    // 16 ana == 1 vori
    const vori = ana / 16;
    return vori;
}
console.log(anaToVori(32));


// Problem : 2 >> pandaCost
function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {
    if (typeof singaraQuantity != "number") {
        console.log("Please enter a valid singara quantity as a number");
    }
    if (typeof samuchaQuantity != "number") {
        console.log("Please enter a valid samucha quantity as a number");
    }
    if (typeof jilapiQuantity != "number") {
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

// Problem : 3 >> picnicBudget
function picnicBudget(numberOfPeople) {
    if (typeof numberOfPeople != "number") {
        console.log("Please enter a valid number as a number of people!");
    }
    let budget;
    // for this condition each people price 5000tk
    if (numberOfPeople <= 100) {
        budget = numberOfPeople * 5000;
    }
    // for this condition each people price 4000tk
    else if (numberOfPeople > 100 && numberOfPeople <= 200) {
        let firstBudget = 100 * 5000;
        let secondBudget = (numberOfPeople - 100) * 4000;
        budget = firstBudget + secondBudget;
    }
    // for this condition each people price 3000tk
    else if (numberOfPeople > 200) {
        firstBudget = 100 * 5000;
        secondBudget = (200 - 100) * 4000;
        let thirdBudget = (numberOfPeople - 200) * 3000;
        budget = firstBudget + secondBudget + thirdBudget;
    }
    return budget;
}
console.log(picnicBudget(201));

// Problem : 4 >> oddFriend
function oddFriend(friendsName) {
    if(typeof friendsName != "object"){
        console.log("Please enter friends name!");
    }
    for (let i = 0; i <= friendsName.length; i++) {
        let friend = friendsName[i].length;
        // check odd friend's length
        if (friend % 2 != 0) {
            return friendsName[i];
        }
    }

}
console.log(oddFriend(["habo", "babu", "kamrul", "hasan", "fahim"]));
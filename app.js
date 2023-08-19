// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 0.00938;
    //return the yen value
    return valueInYen;
}

// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to pound
    let valueInPound = valueInYen * 159.875;
    //return the pound value
    return valueInPound;
}

// export the function to be used on other files 
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

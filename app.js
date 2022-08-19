// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar) {
    let dollarToYen = dollar * 127.9 / 1.2
    return parseFloat(dollarToYen.toFixed(1))
}

function fromYenToPound(yen) {
    let valorEnPound = yen * 0.8 / 127.9
    return parseFloat(valorEnPound)
    }


module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound }

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')


test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js


    // const dollars = fromEuroToDollar 

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("1.2 Dollar should be 127.9 Yen", function () {

    expect(fromDollarToYen(1.2)).toBe(127.9);

})

test("127,9 Yen should be 0.8 Pound", function () {

    expect(fromYenToPound(255.8)).toBe(1.6);
})
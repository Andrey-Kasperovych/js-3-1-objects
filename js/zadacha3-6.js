function calculateTotalPrice(array, prop) {
    'use strict';
    // Write code under this line
    let totalPrice = 0;
    for (const oneObj of array) {
        // console.log(oneObj.name === prop);
        oneObj.name === prop
            ? (totalPrice += oneObj.price * oneObj.quantity)
            : totalPrice;
    }
    return totalPrice;
}

// Объекты и ожидаемый результат
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

function getAllPropValues(array, prop) {
    'use strict';
    // Write code under this line

    let finalMass = [];
    for (const oneObj of array) {
        // console.log(oneObj[prop]);
        console.log(finalMass.push(oneObj[prop]));
        // if (prop in oneObj) {
        //     finalMass.push(oneObj[prop]);
        // }
        // finalMass.push(oneObj[prop]);
    }
    return finalMass;
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

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'category'));
//  []

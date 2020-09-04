const countTotalSalary = function (employees) {
    'use strict';
    // Write code under this line
    let TotalSalary = 0;
    const values = Object.values(employees);
    // console.log(values);
    for (const value of values) {
        TotalSalary += value;
    }
    return TotalSalary;
};

// Объекты и ожидаемый результат
const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
console.log(countTotalSalary(developers));

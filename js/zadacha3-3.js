const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    const best = ' ';
    let maxValue = 0;
    const keys = Object.keys(employees);
    // console.log(keys);
    for (const key of keys) {
        // console.log();
        // console.log(key);
        // console.log(employees[key]);

        if (employees[key] < maxValue) {
            continue;
        }

        maxValue = employees[key];
        best = key;
        // console.log(best);
    }
    return best;
};

// Объекты и ожидаемый результат
const developers = {
    // ann: 295,
    // david: 35,
    // helen: 1,
    // lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

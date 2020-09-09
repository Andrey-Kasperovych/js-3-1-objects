/*
 * Перебор через for...in и Object.keys|values|entries
 */

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

let totalFeedback = 0;
let totalFeedback2 = 0;
// let value = [];

const keys = Object.keys(feedback);
console.log(keys);

for (const key of keys) {
    console.log(key);
    const keyValue = feedback[key];
    totalFeedback += keyValue;
    console.log(keyValue);
}

// console.log(value);
console.log('totalFeedback:', totalFeedback);
console.log(totalFeedback2);

values = Object.values(feedback);

console.log(values);

for (const value of values) {
    console.log(value);
    totalFeedback2 += value;
}

console.log('totalFeedback2:', totalFeedback2);

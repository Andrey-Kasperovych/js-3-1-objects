/*
 * Перебор через for...in и Object.keys|values|entries
 */

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

const keys = Object.keys(feedback);

console.log(keys);

let totalFeedback = 0;

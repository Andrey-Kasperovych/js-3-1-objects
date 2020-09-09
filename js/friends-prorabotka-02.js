/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];

console.table(friends);

// for (const friend of friends) {
//     friend.newprop = 555;
//     console.log(friend.name);
// }

// console.table(friends);

/*
 * Ищем друга по имени
 */

const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        // console.log(friend);
        // console.log(friend.name);
        if (friend.name === friendName) {
            return 'Нашли!!!';
        }
    }
    return 'Не нашли=(';
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

const getAllNames = function (allFriends) {
    let allNames = [];
    for (const friend of allFriends) {
        console.log(friend.name);
        // console.log(Object.values(friend));
        allNames.push(friend.name);
    }
    return allNames;
};

console.log(getAllNames(friends));

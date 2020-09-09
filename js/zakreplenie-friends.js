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

/*
 * Ищем друга по имени
 */

const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        if (friend.name === friendName) {
            return `УРА! Нашли ${friendName}.`;
        }
    }
    return `Увы... Не нашли ${friendName}.`;
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

const getAllNames = function (allFriends) {
    const pokemons = [];
    for (const friend of allFriends) {
        pokemons.push(friend.name);
    }
    return pokemons;
};

console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */
const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];
    for (const friend of allFriends) {
        if (friend.online) {
            onlineFriends.push(friend.name);
        }
    }
    return onlineFriends;
};

console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];
    for (const friend of allFriends) {
        if (!friend.online) {
            offlineFriends.push(friend.name);
        }
    }
    return offlineFriends;
};

console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?

const getFriendsByStatus = function (allFriends) {
    const friendStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        if (friend.online) {
            friendStatus.online.push(friend.name);
            continue;
        }
        friendStatus.offline.push(friend.name);
    }
    return friendStatus;
};

console.log(getFriendsByStatus(friends));

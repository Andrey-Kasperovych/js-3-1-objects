/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     getName(a) {
//         console.log('Ага, это функция =)', a);
//     },
// };

// // console.log(playlist);

// playlist.getName(5);

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
    changeName(newName) {
        console.log('this внутри chageName:', this);
        this.name = newName;
    },
    addTrack(newTrack) {
        this.tracks.push(newTrack);
        // this.trackCount = this.tracks.length;
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    },
};

console.log(playlist);

playlist.changeName('Новое имя');
playlist.addTrack('Fire');
playlist.updateRating(7);
playlist.getTrackCount();
console.log(playlist.getTrackCount());

console.log(playlist);

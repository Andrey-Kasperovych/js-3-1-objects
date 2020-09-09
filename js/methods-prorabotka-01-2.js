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

// console.log([]);

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     getName: function (a, b) {
//         console.log('Ага, это getName =)', a + b);
//     },
// };

// console.log(playlist);

// playlist.getName(5, 10);

// Современные обьявления метода

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    // trackCount: 3,
    getName(a, b) {
        console.log('Ага, это getName =)', a + b);
    },
    changeName(newName) {
        console.log('this внутри changeName: ', this);
        this.name = newName;
    },
    addTrack(newTrack) {
        this.tracks.push(newTrack);
        // this.trackCount = this.tracks.length;
        const trackCount = this.tracks.length;
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        const trackCount = this.tracks.length;
        return 'trackCount: ' + trackCount;
        this.trackCount = this.tracks.length;
    },
};

console.log(playlist);

// playlist.getName(5, 10);
playlist.changeName('Новое имя!');

console.log(playlist);

playlist.addTrack('Тебе 20');
console.log(playlist);

playlist.updateRating(7);
console.log(playlist);

playlist.getTrackCount();
console.log('trackCount: ', playlist.getTrackCount());
console.log(playlist);

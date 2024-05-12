// Que 42
//Start with a copy of your program from Exercise 39.Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const albums = [
    make_album("Atif Aslam", "21"),
    make_album("Atif Aslam", "rafta rafta sanam.."),
    make_album("Rahat Fatih Ali Khan", "Tmhe dil lagi bhool jane paregi", 16)
];
function make_great(albums) {
    for (let i = 0; i < albums.length; i++) {
        albums[i].artist = 'the Great ' + albums[i].artist;
    }
}
function show_albums(albums) {
    for (const album of albums) {
        console.log(album);
    }
}
show_albums(albums);
// here I call show_albums() to show my albums without adding the phrase 'The Great' by passing albums(array created above) as an argument.
make_great(albums);
// here I call make_great() to change each artist's name  by passing albums(array created above) as an argument.
show_albums(albums);
export {};
// here I call show_albums() to show my albums having updated artist's names.
// I am happy to express that this time I have solved this question with my clear concept about all logics used above.

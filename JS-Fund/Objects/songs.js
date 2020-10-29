function songs(input) {

    let countOfSongs = +input.shift()

    let songs = []
    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist
            this.name = name
            this.time = time
        }
    }

    for (let i = 0; i < countOfSongs; i++) {
        let currentSong = input.shift().split('_')
        let playlist, name, time
        [playlist, name, time] = [currentSong[0], currentSong[1], currentSong[2]]
        songs.push(new Song(playlist, name, time))
    }

    let typeOfPlaylist = input.shift()
    for (let key in songs) {
        if (typeOfPlaylist === 'all') {
            console.log(songs[key].name)
        } else if (songs[key].playlist === typeOfPlaylist) {
            console.log(songs[key].name)
        }
    }
}

// songs([
//     '3',
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite'
// ])
songs([
    '4',
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
])
function solve(nameOfBand, album, song){

    let songDurInSecs = (album.length * nameOfBand.length) * song.length / 2

    let rotations = Math.ceil(songDurInSecs / 2.5)

    console.log(`The plate was rotated ${rotations} times.`)
}

solve('Black Sabbath', 'Paranoid', 'War Pigs')
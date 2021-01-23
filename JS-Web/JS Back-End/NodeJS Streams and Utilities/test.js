const fs = require('fs')


const readStream = fs.createReadStream('index.html')

readStream.on('data', (data) => {
    console.log('new chunk')
})

readStream.on('end', (data) => {
    console.log('Reading Ended.')
})




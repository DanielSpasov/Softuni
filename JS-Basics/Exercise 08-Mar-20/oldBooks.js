function solve(input){

    let srcBook = input.shift()
    let numberOfBooks = +input.shift()
    let counter = 0
    let bookIsFound = false
    let nextBook = input.shift()

    while (numberOfBooks > counter){
        if(nextBook == srcBook){
            bookIsFound = true
            break
        }
        counter++
        nextBook = input.shift()
    }

    if(bookIsFound == false){
        console.log(`The book you search is not here!`)
        console.log(`You checked ${numberOfBooks} books.`)
    } else {
        console.log(`You checked ${counter} books and found it.`)
    }
}

solve(["Troy",8,"Stronger","Life Style","Troy"])
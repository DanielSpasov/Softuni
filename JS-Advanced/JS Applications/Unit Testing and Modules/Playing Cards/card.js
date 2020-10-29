function factory(face, suit) {

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let validSuits = ['S', 'H', 'D', 'C']
    let suits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' }

    function throwError(arg) {
        throw new Error(`Card is initialized with invalid ${arg}.`)
    }
    if (!validFaces.includes(face)) {
        throwError('face')
    }
    if (!validSuits.includes(suit)) {
        throwError('suit')
    }

    class Card {
        constructor(face, suit) {
            this.face = face
            this.suit = suit
        }

        toString() {
            return `${this.face}${suits[this.suit]}`
        }
    }
    return Card
}

module.exports = factory
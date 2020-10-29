class Rat {

    constructor(name){
        this.name = name
        this.unitedRats = []
    }

    unite(otherRat){
        if(otherRat.constructor.name == 'Rat') {
            this.unitedRats.push(otherRat)
        }
    }

    getRats(){
        return this.unitedRats
    }

    toString(){
        let rats = this.name
        for(let rat of this.unitedRats){
            rats += `\n##${rat.name}`
        }
        return this.unitedRats
    }
}

let firstRat = new Rat("Peter")
console.log(firstRat.toString())
console.log(firstRat.getRats())
firstRat.unite(new Rat("George"))
firstRat.unite(new Rat("Alex"))
console.log(firstRat.getRats())
console.log(firstRat.toString())
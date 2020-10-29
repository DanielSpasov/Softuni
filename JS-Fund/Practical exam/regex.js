function solve(input) {

    let allMatches = input.match(/([=/])(?<location>[A-Z][A-Za-z]{2,})\1/g)
    let travelPoints = 0
    let destinations = []

    if(allMatches){
        for (match of allMatches) {
            match = match.substring(1, match.length - 1)
            travelPoints += match.length
            destinations.push(match)
        }
    
        console.log(`Destinations: ${destinations.join(', ')}`)
        console.log(`Travel Points: ${travelPoints}`)
    } else {
        console.log(`Destinations: `)
        console.log(`Travel Points: 0`)
    }  
} 

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
solve('ThisIs some InvalidInput')
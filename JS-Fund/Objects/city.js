function city(name, area, population, country, postCode) {
    
    let city = {}

    city.name = name
    city.area = area
    city.population = population
    city.country = country
    city.postCode = postCode
    
    for(let i in city){
        console.log(`${i} -> ${city[i]}`)
    }
}
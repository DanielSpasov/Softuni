function solve(input) {

    const systems = new Map()

    for (line of input) {

        let [system, component, subcomponent] = line.split(' | ')

        if (!systems.get(system)) {
            systems.set(system, new Map())

        }
        if (!systems.get(system).get(component)) {
            systems.get(system).set(component, [])
        }
        systems.get(system).get(component).push(subcomponent)
    }

    let sortedSystems = Array.from(systems.keys()).sort((a, b) => sortSystems(a, b))

    for (system of sortedSystems) {
        console.log(system)
        let sortedComps = Array.from(systems.get(system).keys()).sort((a, b) => sortComponents(system, a, b))

        for(comp of sortedComps){
            console.log(`|||${comp}`)
            systems.get(system).get(comp).forEach(el => console.log(`||||||${el}`))
        }
    }

    function sortSystems(a, b) {
        if (systems.get(a).size != systems.get(b).size) {
            return systems.get(b).size - systems.get(a).size
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        }
    }

    function sortComponents(system, a, b) {
        return systems.get(system).get(b).length - systems.get(system).get(a).length
    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])
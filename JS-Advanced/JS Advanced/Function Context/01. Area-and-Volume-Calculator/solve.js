function area() {
    return this.x * this.y
}

function vol() {
    return this.x * this.y * this.z
}


function solve(area, vol, input) {

    let objects = JSON.parse(input)
    let result = []

    objects.forEach(obj => {
        let areaOut = area.call(obj)
        let volOut = vol.call(obj)

        let currentObject = {area: Math.abs(areaOut), volume: Math.abs(volOut)}
        result.push(currentObject)
    })

    return result
}

solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]')
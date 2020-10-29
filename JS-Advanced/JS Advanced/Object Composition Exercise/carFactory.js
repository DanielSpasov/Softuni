function solve(params) {

    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: params.color }, { type: 'coupe', color: params.color }];
    let wheelsize = params.wheelsize % 2 == 1 ? params.wheelsize : params.wheelsize - 1;

    return {
        model: params.model,
        engine: engines.filter(e => e.power >= params.power)[0],
        carriage: carriages.filter(c => c.type == params.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})

solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})
(() => { // Words for judge but not for me, Don't know why.

    let add = (vec1, vec2) => [vec1[0]+vec2[0], vec1[1]+vec2[1]]
    let multiply = (vec1, scalar) => [vec1[0] * scalar, vec1[1] * scalar]
    let length = (vec1) => Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2))
    let dot = (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1]
    let cross = (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0]

    return {add, multiply, length, dot, cross};
})()

solution.add([1, 1], [1, 0])
solution.multiply([3.5, -2], 2)
solution.length([3, -4])
solution.dot([1, 0], [0, -1])
solution.cross([3, 7], [1, 0])
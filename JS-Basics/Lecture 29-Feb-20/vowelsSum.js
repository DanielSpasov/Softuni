function solve(input) {

    let text = input.shift()
    let totalVowelSum = 0

    for (let index = 0; index < text.length; index++) {

        let character = text[index]

        switch (character) {
            case "a":
                totalVowelSum += 1
                break;
            case "e":
                totalVowelSum += 2
                break;
            case "i":
                totalVowelSum += 3
                break;
            case "o":
                totalVowelSum += 4
                break;
            case "u":
                totalVowelSum += 5
                break;
        }
    }
    console.log
}

solve(["hello"])
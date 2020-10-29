function equalNeighbors(input) {

    let lastRow = []
    let seq = 0
    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i]

        for (let j = 0; j < currentRow.length; j++) {
            let currentEl = currentRow[j]
            let nextEl = currentRow[j + 1]
            let lastEl = lastRow[j]
            if (currentEl === lastEl) {
                seq++
            }
            if (currentEl === nextEl) {
                seq++
            }
        }
        lastRow = currentRow
    }
    console.log(seq)
}
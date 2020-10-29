function houseParty(input) {

    let list = []
    for (i in input) {
        let guest = input[i].split(' ')[0]
        let action = input[i].split(' ')[2]

        switch (action) {
            case 'going!':
                if (list.includes(guest)) {
                    console.log(`${guest} is already in the list!`)
                } else {
                    list.push(guest)
                }
                break
            case 'not':
                if (!list.includes(guest)) {
                    console.log(`${guest} is not in the list!`)
                } else {
                    list.splice(list.indexOf(guest), list.indexOf(guest) + 1)
                }
                break
        }
    }
    for(i in list){
        console.log(list[i])
    }
}
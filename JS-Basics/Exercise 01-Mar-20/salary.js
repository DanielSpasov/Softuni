function solve(input) {

    let tabsCount = +input.shift()
    let salary = +input.shift()

    for (let i = 0; i < tabsCount; i++) {
        let tab = input.shift()

        switch (tab) {
            case "Facebook":
                salary -= 150
                break;
            case "Instagram":
                salary -= 100
                break;
            case "Reddit":
                salary -= 50
                break;
        }
    }
    if(salary <= 0){
        console.log("You have lost your salary.")
    } else {
        console.log(salary)
    }
}

solve([3,500,"Facebook","Stackoverflow.com","softuni.bg"])
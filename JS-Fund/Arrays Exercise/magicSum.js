function solve(a,b) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++){
            if (+a[i] + +a[j] === +b){
                console.log(`${a[i]} ${a[j]}`);     
            }
        }
    }
}

solve()
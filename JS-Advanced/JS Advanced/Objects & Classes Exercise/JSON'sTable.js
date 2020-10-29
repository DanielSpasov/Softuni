function solve(input){

    console.log('<table>')
    for(line of input){
        
        console.log('   <tr>')

        let info = JSON.parse(line)
        console.log(`       <td>${info.name}</td>`)
        console.log(`       <td>${info.position}</td>`)
        console.log(`       <td>${info.salary}</td>`)

        console.log('   </tr>')
    }
    console.log('</table>')
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])
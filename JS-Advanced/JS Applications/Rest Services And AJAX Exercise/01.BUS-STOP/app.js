function getInfo() {

    let validIds = ['1287', '1308', '1327', '2334']
    let stopId = document.getElementById('stopId')
    let stopInfo = document.getElementById('stopName')
    let buses = document.getElementById('buses')

    if (!validIds.includes(stopId.value)) {
        stopInfo.textContent = 'Error'
        buses.textContent = ''
        return
    }

    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            stopInfo.textContent = data.name

            Object.keys(data.buses).forEach(key => {
                let li = document.createElement('li')
                li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`
                buses.appendChild(li)
            })
            stopId.value = ''
        })
}
function attachEventsListeners() {

    let convertBtn = document.getElementById('convert')
    convertBtn.addEventListener('click', convert)
    
    function convert() {
        
        let inputField = Number(document.getElementById('inputDistance').value)
        let outputField = document.getElementById('outputDistance')
        let inputUnits = document.getElementById('inputUnits').value
        let outputUnits = document.getElementById('outputUnits').value
        let inputToM
        let result

        switch (inputUnits) {
            case 'km': inputToM = inputField * 1000; break
            case 'm': inputToM = inputField; break
            case 'cm': inputToM = inputField * 0.01; break
            case 'mm': inputToM = inputField * 0.001; break
            case 'mi': inputToM = inputField * 1609.34; break
            case 'yrd': inputToM = inputField * 0.9144; break
            case 'ft': inputToM = inputField * 0.3048; break
            case 'in': inputToM = inputField * 0.0254; break
        }

        switch (outputUnits) {
            case 'km': result = inputToM / 1000; break
            case 'm': result = inputToM; break
            case 'cm': result = inputToM / 0.01; break
            case 'mm': result = inputToM / 0.001; break
            case 'mi': result = inputToM / 1609.34; break
            case 'yrd': result = inputToM / 0.9144; break
            case 'ft': result = inputToM / 0.3048; break
            case 'in': result = inputToM / 0.0254; break
        }
        outputField.value = result
    }
}
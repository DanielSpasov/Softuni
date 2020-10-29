function solve(location) {

    location = location.split('\\')
    let target = location[location.length - 1]
    let fileName = target.substring(0, target.lastIndexOf('.'))
    let fileExtension = target.substring(target.lastIndexOf('.') + 1, target.length)
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`)
}

solve('C:\\Internal\\training-internal\\Template.pptx')
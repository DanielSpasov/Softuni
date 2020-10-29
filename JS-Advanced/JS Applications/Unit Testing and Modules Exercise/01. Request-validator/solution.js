function httpRequset(request) {

    let methods = ['POST', 'GET', 'DELETE', 'CONNECT']
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let uriRegex = /^([A-Za-z0-9.]+)$|\*/g
    let messageRegex = /^([^<>\\&'"]*)$/g

    if (!request.hasOwnProperty('method') || !methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }
    if (!request.hasOwnProperty('uri') || !request.uri.match(uriRegex)) {
        throw new Error('Invalid request header: Invalid URI')
    }
    if (!request.hasOwnProperty('version') || !versions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }
    if (!request.hasOwnProperty('message') || !request.message.match(messageRegex)) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return request
}

httpRequset({
    method: 'GET',
    uri: 'apt.get',
    version: 'HTTP/1.1',
    message: 'Valid message, I guess...'
})
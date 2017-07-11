function validate(method,uri,version,message) {
    let validateRequest = {
        method: method,
        uri:uri,
        version:version,
        message:message
    };

    if(validateRequest.method !== 'GET' || validateRequest.method !== 'POST' ||
    validateRequest.message !== 'DELETE' || validateRequest.message !== 'CONNECT'){
        throw new Error(`Invalid request header: Invalid Method`);
    }else if(validateRequest.version !== 'HTTP/0..9' || validateRequest.version !== 'HTTP/1.0' ||
    validateRequest.version !== 'HTTP/1.1' || validateRequest.version !== 'HTTP/2.0'){
        throw new Error('Invalid request header: Invalid Version');
    }
}

validate({method: 'OPTIONS',
uri: 'git.master',
version: 'HTTP/1.1',
message: '-receive'
});

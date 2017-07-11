function requestValidator(req) {
    (function methodValidator() {
        let method = ["GET", "POST", "DELETE", "CONNECT"];
        if (!req.method || !method.includes(req.method)) {
            throw Error("Invalid request header: Invalid Method");
        }
    })();
    (function uriValidator() {
        let pattern = /\*|^[a-zA-Z.\d]+$/g;
        if (!req.uri || !pattern.test(req.uri)) {
            throw Error("Invalid request header: Invalid URI");
        }
    })();
    (function versionValidator() {
        let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
        if (!req.version || !validVersion.includes(req.version)) {
            throw Error("Invalid request header: Invalid Version");
        }
    })();
    (function messageValidator() {
        let pattern = /[<>\\&'"]/;
        console.log(req.message);
        if (req.message != "") {
            if (!req.message || pattern.test(req.message)) {
                throw Error("Invalid request header: Invalid Message");
            }
        }
    })();
    return req;
}

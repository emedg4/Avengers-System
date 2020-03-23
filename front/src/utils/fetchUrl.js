
const fetch = require('node-fetch');

const fetchUrl = async (URL, method = null, body = null ) => {
    let options;
    if(method == null){
        options = {
            method:`get`,
            headers: { 'Content-Type': 'application/json' }
        }
    }
    else{
        options = {
            method: `${method}`,
            body: body,
            headers: { 'Content-Type': 'application/json' }
        }
    }
    const response = await fetch(URL, options)
    return response.json();
}

module.exports = fetchUrl;
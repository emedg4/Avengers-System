
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
        let payload = JSON.stringify(body)
        options = {
            method: `${method}`,
            body: payload,
            headers: { 'Content-Type': 'application/json' }
        }
    }
    const response = await fetch(URL, options)
    return response.json();
}

export default fetchUrl;
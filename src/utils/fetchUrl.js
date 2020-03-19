const fetch = require('node-fetch');

const fetchUrl = async (URL, method) => {
    const options = {
        method:`${method}`,
        headers: { 'Content-Type': 'application/json' }
    }

    const response = await fetch(URL, options)
    return response;
}

module.exports = fetchUrl;
const axios = require('axios')
const fs = require('fs')

async function fetchData(req, res, next) {
    return await axios('https://prototype.sbulltech.com/api/v2/instruments')
        .then(response => JSON.stringify(response.data))
        .then(response => JSON.parse(response))
        .then(response => fs.writeFileSync("./instruments.json", response))
        .catch(error => console.error(error))
        next();
}

module.exports = fetchData
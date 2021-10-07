const axios = require("axios").default;

let options = {
    method: 'GET',
    url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
    headers: {
        'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        'x-rapidapi-key': ''
    }
};

setApiKey = (apiKey) => {
    options.headers['x-rapidapi-key'] = apiKey;
}

lookUp = async (params) => {
    options['params'] = params;
    try {
        let response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    setApiKey,
    lookUp
}
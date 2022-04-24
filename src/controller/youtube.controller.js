const { response } = require('express');
const https = require('https')
const getVideosYoutube = (req, resp = response) => {

    try {
        let q = req.params.q;
        q = q.replace(' ', '%20');
        const url = `${process.env.URL_SEARCH_YOUTUBE}&q=${q}&key=${process.env.API_KEY}`;
        console.log(url)
        https.get(url, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                data = JSON.parse(data);
                return resp.status(200).json({
                    ok: true,
                    data
                });
            });
        });

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getVideosYoutube
}
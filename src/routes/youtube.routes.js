const { Router } = require('express');

const { getVideosYoutube } = require('../controller/youtube.controller');

const routes = Router();

routes.get('/:q', getVideosYoutube);

module.exports = routes;
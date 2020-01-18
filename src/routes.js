const express = require('express');
const DevController = require('./controllers/DevController');
const MatchsController = require('./controllers/MatchsController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

routes.get('/devs/:devId/matchs', MatchsController.index);

module.exports = routes;

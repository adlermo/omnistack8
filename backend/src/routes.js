const express = require('express');
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router();

// POST é sempre criar
routes.post(`/devs`, DevController.store)
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)

/* routes.get('/', (req, res) => {
    return res.json({
        message:
            `Hallo Welt! Du bist ${req.query.name}?`
    })
}) */


module.exports = routes;
// para expor algo module.exports
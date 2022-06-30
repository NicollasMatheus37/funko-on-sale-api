const express = require("express");
const router = express.Router();

userRoutes();
// funkoRoutes();

function userRoutes() {
    const userController = require('./app/controllers/user.controller');

    router.post('/users', userController.create);
    router.post('/users/authenticate', userController.authenticate);
    router.get('/users/:id', userController.find);
    router.put('/users/:id', userController.update);
    router.delete('/users/:id', userController.delete);
}

function userRoutes() {
    const funkoController = require('./app/controllers/funko.controller');

    router.get('/funkos', funkoController.index);
    router.post('/funkos', funkoController.create);
    router.put('/funkos/:id', funkoController.update);
    router.delete('/funkos/:id', funkoController.delete);
}

module.exports = router;
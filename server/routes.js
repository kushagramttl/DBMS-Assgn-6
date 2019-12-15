var express = require('express');
var router = express.Router();

var controller = require('./dao');

// a simple test url to check that all of our files are communicating correctly.
router.post('/api/actors', controller.actor_create);

router.get('/api/actors', controller.actor_getAll);

router.get('/api/actors/:id', controller.actor_getWithId);

router.put('/api/actors/:id', controller.actor_update);

router.delete('/api/actors/:id', controller.actor_deleteWithId);

router.delete('/api/actors', controller.actor_deleteAll);

router.post('/api/movies', controller.movie_create);

router.get('/api/movies', controller.movie_getAll);

router.get('/api/movies/:id', controller.movie_getWithId);

router.put('/api/movies/:id', controller.movie_update);

router.delete('/api/movies/:id', controller.movie_deleteWithId);

router.delete('/api/movies', controller.movie_deleteAll);

router.post('/api/actor/:actorid/movie/:movieid', controller.actormovie_create);

router.get('/api/actor/:id/movie', controller.actormovie_getmovies);

router.get('/api/movie/:id/actor', controller.actormovie_getactors);

router.delete('/api/actor/:actorid/movie/:movieid', controller.remove_relation);

router.delete('/api/movie/:movieid/actor/:actorid', controller.remove_relation);

router.delete('/api/actor/:id/movie', controller.remove_relations);

module.exports = router;
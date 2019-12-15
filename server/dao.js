const Actor = require('./models/actor.server.model')
const Movie = require('./models/movie.server.model');
const ActorMovie = require('./models/actormovie.server.model');
const mongoose = require('mongoose');

exports.actor_create = function (req, res, next) {

    if (req.body.id) {
        let actor = new Actor(
            {
                _id: req.body.id,
                name: req.body.name,
                first: req.body.first,
                last: req.body.last,
                nombre: req.body.nombre
            }
        );
        actor.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send(actor);
        })
    } else {
        let actor = new Actor(
            {
                _id: Math.random(),
                name: req.body.name,
                first: req.body.first,
                last: req.body.last,
                nombre: req.body.nombre
            }
        );
        actor.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send(actor);
        })
    }

};

exports.actor_getAll = function (req, res, next) {
    Actor.find({}, (err, actors) => {
        if (actors) {
            res.json(actors);
        } else {
            return null;
        }
    })
};

exports.actor_getWithId = async function (req, res, next) {
    Actor.findById(req.params.id, (err, actor) => {
        if (err) {
            return next(err);
        }
        res.send(actor);
    })
};

exports.actor_update = function (req, res, next) {
    if (req.body.name) {
        Actor.findOneAndUpdate({_id: req.params.id},
                               {
                                   $set: {
                                       name: req.body.name
                                   }
                               },
                               function (err, doc) {
                                   if (err) {
                                       res.status(400).json(err)
                                   }
                                   res.status(200).json(doc)
                               })
    }
    if (req.body.nombre) {
        Actor.findOneAndUpdate({_id: req.params.id},
                               {
                                   $set: {
                                       nombre: req.body.nombre
                                   }
                               },
                               function (err, doc) {
                                   if (err) {
                                       res.status(400).json(err)
                                   }
                                   res.status(200).json(doc)
                               })
    }
};

exports.actor_deleteWithId = function (req, res, next) {
    Actor.remove({_id: req.params.id}, function (err) {
        if (err) {
            return next(err);
        }
        res.send('OK');
    })
};

exports.actor_deleteAll = function (req, res, next) {
    Actor.collection.drop(function (err) {
        if (err) {
            return next(err);
        }
    });
};

exports.movie_create = function (req, res, next) {

    if (req.body.id) {

        let movie = new Movie(
            {
                _id: req.body.id,
                name: req.body.name,
                title: req.body.title
            }
        );

        movie.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send(movie);
        })
    } else {
        let movie = new Movie(
            {
                _id: Math.random(),
                name: req.body.name,
                title: req.body.title
            }
        );

        movie.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send(movie);
        })
    }
};

exports.movie_getAll = function (req, res, next) {
    Movie.find({}, (err, movies) => {
        if (movies) {
            res.json(movies);
        }
    })
};

exports.movie_getWithId = function (req, res, next) {
    Movie.findById(req.params.id, (err, actor) => {
        if (err) {
            return next(err);
        }
        res.send(actor);
    })
};

exports.movie_update = function (req, res, next) {
    if (req.body.name) {
        Movie.findOneAndUpdate({_id: req.params.id},
                               {
                                   $set: {
                                       name: req.body.name
                                   }
                               },
                               function (err, doc) {
                                   if (err) {
                                       res.status(400).json(err)
                                   }
                                   res.status(200).json(doc)
                               })
    }
    if (req.body.title) {
        Movie.findOneAndUpdate({_id: req.params.id},
                               {
                                   $set: {
                                       title: req.body.title
                                   }
                               },
                               function (err, doc) {
                                   if (err) {
                                       res.status(400).json(err)
                                   }
                                   res.status(200).json(doc)
                               })
    }
};

exports.movie_deleteWithId = function (req, res, next) {
    Movie.remove({_id: req.params.id}, function (err) {
        if (err) {
            return next(err);
        }
        res.send('OK');
    })
};

exports.movie_deleteAll = function (req, res, next) {
    Movie.collection.drop(function (err) {
        return next(err);
    });
};

async function getActorWithId(actorId) {
    return Actor.findOne({_id: actorId});
}

async function getMovieWithId(movieId) {
    return Movie.findById(movieId);
}

exports.actormovie_create = async function (req, res, next) {

    let actor = await getActorWithId(req.params.actorid);
    let movie = await getMovieWithId(req.params.movieid);

    console.log("******actor-" + actor);

    let actmov = new ActorMovie({
                                    actor: actor._id,
                                    movie: movie._id
                                });
    actmov.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(actmov);
    })
};

exports.actormovie_getactors = async function (req, res, next) {
    ActorMovie.find({movie: req.params.id}, function (err, actors) {
        if (err) {
            return next(err);
        }
        res.send(actors);
    });
};

exports.actormovie_getmovies = async function (req, res, next) {
    ActorMovie.find({actor: req.params.id}, function (err, movies) {
        if (err) {
            return next(err);
        }
        res.send(movies);
    });
};

exports.remove_relation = function (req, res, next) {
    ActorMovie.remove({actor: req.params.actorid, movie: req.params.movieid}, function (err) {
        if (err) {
            return next(err);
        }
        res.send('OK');
    })
};

exports.remove_relations = function (req, res, next) {
    ActorMovie.remove({actor: req.params.id}, function (err) {
        if (err) {
            return next(err);
        }
        res.send('OK');
    })
};
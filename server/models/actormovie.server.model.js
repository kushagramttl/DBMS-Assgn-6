
const mongoose = require('mongoose');
const actormovieSchema = require('./actormovie.server.schema');
const actormovieModel = mongoose.model('ActorMovieModel', actormovieSchema);
module.exports = actormovieModel;
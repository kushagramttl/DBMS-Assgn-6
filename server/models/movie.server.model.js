
const mongoose = require('mongoose');
const movieSchema = require('./movie.schema.server');
const movieModel = mongoose.model('MovieModel', movieSchema);
module.exports = movieModel;
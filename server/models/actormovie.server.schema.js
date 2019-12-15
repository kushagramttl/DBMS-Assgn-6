const mongoose = require('mongoose');
require('dotenv');

const actormovieSchema = mongoose.Schema({
                                             actor: {
                                                 type: mongoose.Schema.Types.Number,
                                                 ref: 'ActorModel'
                                             },
                                             movie: {
                                                 type: mongoose.Schema.Types.Number,
                                                 ref: 'MovieModel'
                                             }
                                         }, {collection: 'actor_movie'});
module.exports = actormovieSchema;

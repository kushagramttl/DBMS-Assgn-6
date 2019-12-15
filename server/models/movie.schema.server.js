const mongoose = require('mongoose');
require('dotenv');

const movieSchema = mongoose.Schema({
                                        _id: Number,
                                        name: String,
                                        title: String
                                    }, {collection: 'movie'});
module.exports = movieSchema;
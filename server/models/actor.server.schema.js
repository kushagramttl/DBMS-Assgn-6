const mongoose = require('mongoose');
require('dotenv');

const actorSchema = mongoose.Schema({
                                        _id: Number,
                                        name: String,
                                        first: String,
                                        last: String,
                                        nombre: String
                                    }, {collection: 'actor'});
module.exports = actorSchema;
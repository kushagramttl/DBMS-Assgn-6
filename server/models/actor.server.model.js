
const mongoose = require('mongoose');
const actorSchema = require('./actor.server.schema');
const actorModel = mongoose.model('ActorModel', actorSchema);
module.exports = actorModel;
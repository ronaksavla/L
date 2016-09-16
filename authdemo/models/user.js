var mongoose = require("mongoose");
var poassportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(poassportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);
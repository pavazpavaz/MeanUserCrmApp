/**
 * Created by Pedro on 16-03-2015.
 */

// grab the packages that we need for the message model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// article schema
var ArticleSchema = new Schema({
    author : { type:mongoose.Schema.Types.ObjectId, ref: "User" },
    content : String
});

// return the article model
module.exports = mongoose.model("Article", ArticleSchema);
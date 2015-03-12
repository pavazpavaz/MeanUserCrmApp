/**
 * Created by Pedro on 06-03-2015.
 */

// module.exports is a way to pass information between different files
module.exports = {
    "port": process.env.PORT || 8080,
    "database": "mongodb://node:noder@ds039251.mongolab.com:39251/usercrmapp", // database
    "secret": "ilovescotchscotchyscotchscotch" // create a secret to create tokens with
};
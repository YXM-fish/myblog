const User = require('../lib/mongo').User

module.exports = {
    create: function create (user) {
        return User.insertOne(user).exec()
    },
    getUserByName: function getUserByName(name) {
        return User.findOne({name: name}).addCreatedAt().exec()
    }
}
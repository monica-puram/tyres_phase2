var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName : {
        type: String,
        default: ''
    },
    email:{
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    cnfPassword: {
        type: String,
        default: ''
    },
    address :{
        type: String,
        default: ''
    },
    address2: {
        type: String,
        default: ''
    },
    city:{
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    zipCode: {
        type: String,
        default: ''
    },
    isDeleted : {
        type: Boolean,
        default: false
    }
})

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
}
UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);
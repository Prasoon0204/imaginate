const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    firstname: {type: String},
    lastname: {type: String},
    planId: {type: Number, default: 1},
    creditBalance: {type: Number, default: 10},
});

const User = models?.User || model('User',userSchema);

export default User;
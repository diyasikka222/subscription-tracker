import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'User NAme is Required'],
        trim: true, //if we have some empty spaces to cover them
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 5,
        maxlength: 50,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6,
    }
}, { timestamps: true }); //timestamps to show the timestamp of when the user has been created or modified

const User = mongoose.model('User', userSchema);

export default User;
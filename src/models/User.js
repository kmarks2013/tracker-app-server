const mongoose = requre('mongoose')

const userSchema = mongoose.Schmea({
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

mongsoose.model('User', userSchema)

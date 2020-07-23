const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req, res) => {
    //console.log(req.body)
    const {email, password} = req.body

    try{
        const user = new User({email, password})
        await user.save()
        res.send("you made a post request")

    }  catch (err){
        return res.status(422).send(err.message)
        // res.send(err)
    }

})

module.exports = router
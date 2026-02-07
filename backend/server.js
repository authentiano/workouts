const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 50000,
    family: 4 // Use IPv4, skip trying IPv6
})
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
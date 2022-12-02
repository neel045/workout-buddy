const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const workoutsRouter = require("./routes/workoutRouter")

const app = express()

//middlewares
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/workouts", workoutsRouter)

//connect to db

mongoose
    .connect(process.env.MONGODB_URI.replace("<password>", process.env.PASSWORD))
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })

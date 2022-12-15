const express = require("express")
require("dotenv").config()

const workoutsRouter = require("./routes/workoutRouter")
const usersRouter = require("./routes/userRouter")

const app = express()

//middlewares
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/workouts", workoutsRouter)
app.use("/api/user", usersRouter)

module.exports = app

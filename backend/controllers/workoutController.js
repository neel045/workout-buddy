const mongoose = require("mongoose")
const Workout = require("../models/Workout")

const getWorkouts = async (req, res) => {
    const userId = req.user
    const workouts = await Workout.find({ userId }).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}

const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such workout" })
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({ error: "no such workout" })
    }

    res.status(200).json(workout)
}

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    let emptyFields = []

    if (title === "") {
        emptyFields.push("title")
    }

    if (load === "") {
        emptyFields.push("load")
    }

    if (reps === "") {
        emptyFields.push("reps")
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "please fill in all the fields", emptyFields })
    }

    try {
        const userId = req.user._id
        const workout = await Workout.create({ title, load, reps, userId })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }

    // res.json({ msg: `${req.path} and ${req.method} is working` })
}

const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such workout" })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!workout) {
        return res.status(404).json({ error: "no such workout" })
    }
    res.status(200).json(workout)
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such workout" })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(404).json({ error: "no such workout" })
    }

    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout,
}

const express = require("express")
const {
    getWorkouts,
    createWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require("./../controllers/workoutController")

const router = express.Router()

router.get("/", getWorkouts)
router.get("/:id", getWorkout)
router.post("/", createWorkout)
router.patch("/:id", updateWorkout)
router.delete("/:id", deleteWorkout)

module.exports = router

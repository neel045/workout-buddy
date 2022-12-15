const express = require("express")
const { requireAuth } = require("../middlewares/requireAuth")
const workoutController = require("./../controllers/workoutController")

const router = express.Router()

router.use(requireAuth)

router.route("/").get(workoutController.getWorkouts).post(workoutController.createWorkout)

router
    .route("/:id")
    .get(workoutController.getWorkout)
    .patch(workoutController.updateWorkout)
    .delete(workoutController.deleteWorkout)

module.exports = router

const mongoose = require("mongoose")

const workoutSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "You need title"],
        },
        reps: {
            type: Number,
            required: true,
        },
        load: {
            type: Number,
            required: true,
        },
        userId: {
            type: mongoose.Schema.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Workout", workoutSchema)

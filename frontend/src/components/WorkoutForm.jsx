import { useState } from "react"
import useWorkoutsContext from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)

    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submitted")
        const workout = { title, load, reps }

        const res = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-type": "application/json",
            },
        })

        const json = await res.json()
        if (!res.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (res.ok) {
            setTitle("")
            setLoad("")
            setReps("")
            setError(null)
            setEmptyFields([])
            dispatch({ type: "CREATE_WORKOUT", payload: json })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label htmlFor="title">Workout name</label>
            <input
                id="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes("title") ? "error" : ""}
            />

            <label htmlFor="load">Load(kg):</label>
            <input
                id="load"
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes("load") ? "error" : ""}
            />

            <label htmlFor="reps">Reps :</label>
            <input
                id="reps"
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes("reps") ? "error" : ""}
            />

            <button>Add Workout</button>

            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm

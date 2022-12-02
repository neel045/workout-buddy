import { useEffect } from "react"
import WorkoutDetails from "../components/WorkourDetails"
import WorkoutForm from "../components/WorkoutForm"
import useWorkoutsContext from "../hooks/useWorkoutsContext"

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()
    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch("/api/workouts")
            const json = await res.json()

            if (res.ok) {
                dispatch({ type: "SET_WORKOUTS", payload: json })
            }
        }

        fetchWorkouts()
    }, [])

    // return <div>{workouts && workouts.map((workout) => <p>{workout.title}</p>)}</div>
    return (
        <div className="home">
            <div className="workouts">
                {workouts &&
                    workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home

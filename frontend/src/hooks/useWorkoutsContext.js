import { useContext } from "react"
import { WokroutContext } from "../context/WorkoutContext"

const useWorkoutsContext = () => {
    const context = useContext(WokroutContext)

    if (!context) {
        throw Error("useWorkoutsContext must be used inside of WokroutContextProvider")
    }

    return context
}

export default useWorkoutsContext

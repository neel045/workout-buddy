import { useReducer } from "react"
import { createContext } from "react"

const WokroutContext = createContext()

const workoutReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return {
                workouts: action.payload,
            }
        case "CREATE_WORKOUT":
            return {
                workouts: [action.payload, ...state.workouts],
            }
        case "DELETE_WORKOUT":
            return {
                workouts: state.workouts.filter((workout) => workout._id != action.payload._id),
            }
        default:
            return state
    }
}

const WokroutContextProvider = (props) => {
    const [state, dispatch] = useReducer(workoutReducer, { workouts: null })

    return (
        <WokroutContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </WokroutContext.Provider>
    )
}

export { WokroutContextProvider, WokroutContext, workoutReducer }

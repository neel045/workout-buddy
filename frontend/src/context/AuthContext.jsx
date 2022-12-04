import { useEffect } from "react"
import { createContext } from "react"
import { useReducer } from "react"

const AuthContext = createContext()

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }
}

const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            dispatch({ type: "LOGIN", payload: user })
        }
    }, [])

    console.log("AuthContext state", state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>{props.children}</AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider, authReducer }

import { useState } from "react"
import useAuthContext from "./useAuthContext"

const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const { dispatch } = useAuthContext()

    const login = async function (email, password) {
        setIsLoading(true)
        setError(null)

        const res = await fetch("/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })

        const json = await res.json()

        if (!res.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        //setting up user in localstorage
        if (res.ok) {
            localStorage.setItem("user", JSON.stringify(json))
        }

        dispatch({ type: "LOGIN", payload: json })
        setIsLoading(false)
    }
    return { error, isLoading, login }
}

export default useLogin

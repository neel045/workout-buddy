import { useState } from "react"
import useSignup from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isLoading, error, signup } = useSignup()

    const handleChange = async (e) => {
        e.preventDefault()
        console.log(email, password)
        console.log(signup)
        await signup(email, password)
    }

    return (
        <form className="signup" onSubmit={handleChange}>
            <h3>Sign up</h3>

            <label htmlFor="email">Email : </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password :</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button disabled={isLoading}>{isLoading ? "loading..." : " Sign up"}</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup

import { Link } from "react-router-dom"
import logo from "../assets/new-logo.png"
import useAuthContext from "../hooks/useAuthContext"
import useLogout from "../hooks/useLogout"

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    console.log()

    const handleClick = (e) => {
        e.preventDefault()
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img className="logo" src={logo} alt="" />
                </Link>
                <nav>
                    {user ? (
                        <div>
                            <span>{user.email.slice(0, user.email.indexOf("@"))} </span>
                            <button onClick={handleClick}>Logout</button>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar

import { Link } from "react-router-dom"
import logo from "../assets/new-logo.png"

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img className="logo" src={logo} alt="" />
                </Link>
            </div>
        </header>
    )
}

export default Navbar

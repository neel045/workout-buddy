import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { AuthContextProvider } from "./context/AuthContext"
import { WokroutContextProvider } from "./context/WorkoutContext"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthContextProvider>
            <WokroutContextProvider>
                <App />
            </WokroutContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
)

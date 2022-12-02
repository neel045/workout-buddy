import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { WokroutContextProvider } from "./context/WorkoutContext"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <WokroutContextProvider>
            <App />
        </WokroutContextProvider>
    </React.StrictMode>
)

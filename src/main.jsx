import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App/main/App.jsx"
import "./App/main/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log("Hello fellow developers!")
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

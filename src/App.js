import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="sidebar">
                <li>
                    <a href="/" className="home">
                        HOME
                    </a>
                </li>
                <li>Atlanta, GA</li>
                <li>Austin, TX </li>
                <li>New York, NY </li>
            </div>
            <div className="content">
                <h1>
                    <input type="text" className="searchBar" />
                </h1>
                <h3>LOCATION</h3>
                <h3>Date</h3>
                <h3>Temperature </h3>
                <h3>Summary</h3>
            </div>
        </div>
    );
}

export default App;

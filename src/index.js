import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, BrowswerRouter as Router} from "react-router-dom"
import "./index.css";
import App from "./App";
import "./App.css"
import styled from 'styled-components'

ReactDOM.render(

<BrowserRouter>
    <React.StrictMode>
    <App />
    </React.StrictMode>
</BrowserRouter>   
    
    
    ,document.getElementById("root"));

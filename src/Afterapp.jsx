import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Messages from "./Components/Messsage_Side";
import './Afterapp.css'

function Afterapp(){
    return(
        <div className="main">
            <Navbar className='navbar'/>
                <Routes>
                    <Route/>
                </Routes>

        </div>
    )
}

export default Afterapp;
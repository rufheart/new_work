import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Messages from "./Components/Messsage_Side";
import './Afterapp.css'
import { Context } from "./Components/Context";

function Afterapp(){
    let {deyer} = useContext(Context)
    return(
        <div className="main">
            <nav>
                <Navbar className='navbar'/>
                <Messages/>
            </nav>
                <Routes>
                    <Route path='/messages' element={<Messages/>} >
                        
                    </Route>
                </Routes>
        </div>
    )
}

export default Afterapp;
import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";
import { useContext } from "react";
import { Context } from "./Context";



function Navbar(){
    let [ic, setIc] = useState('fa fa-bars')
    let {deyer} = useContext(Context)
    console.log(deyer,'navbars')
    function change(){
        setIc('fa fa-arrow-left')
    }

    function reverse(){
        setIc('fa fa-bars')
    }

    return(
        <div className="navbar">
            <div className="chat_list_header">
                <div>
                    <div>
                        <i className={ic} onClick={reverse}></i>
                    </div>
                    <div>
                        <i className='fa fa-search'></i>
                        <input type="text" placeholder="Search" onClick={change} />
                    </div>
                </div>
            </div>
            <div className="chat_list_body">
                {deyer.map((value, index)=>{
                    return(
                        <NavChat value={value} key={index}/>
                    )
                })}
                <NavChat/>
            </div>
        </div>
    )
}

function NavChat(value){
    console.log(value,'navchat')
    return(
        <NavLink to='/' activeclassname="current">
            <div>
                <div>
                    <div></div>
                    <div>{value.username}</div>
                    <div><img src="" alt="" /></div>
                </div>
                <div></div>
            </div>
        </NavLink> 
    )
}

export {NavChat}
export default Navbar;
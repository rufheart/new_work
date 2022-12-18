import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import './Message_Side.css'
import { useState } from "react";
import { Context } from "./Context";

function Messages(){
    let {deyer} = useContext(Context)
    return(
        <div className="message">
            <div>  {/*header message div*/}
                <div>
                    <div><img src={require('../sekil.jpg')} alt="" /></div>
                    <div>
                        <div>Name</div>
                        <div><span>Memebers count</span><span>How much user online</span></div>
                    </div>
                </div>
                <div><i className='fa fa-search'></i><i className="fa fa-ellipsis-v"></i></div>
            </div>
            <div></div>  {/* mesage part */}
            <Outlet/>
        </div>
    )
}

export default Messages;
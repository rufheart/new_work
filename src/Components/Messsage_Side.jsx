import React, { useContext } from "react";
import './Message_Side.css'
import { useState } from "react";
import { Context } from "./Context";
import { Outlet } from "react-router-dom";

function Messages({value}){
    let {deyer} = useContext(Context)
    let [name,setName] = useState(value)
   console.log(name,value)
    return(
        <div className="message">
            <div>  {/*header message div*/}
                <div>
                    <div><img src={require('../sekil.jpg')} alt="" /></div>
                    <div>
                        <div>{name}</div>
                        <div><span>{value} count</span><span>How much user online</span></div>
                    </div>
                </div>
                <div><i className='fa fa-search'></i><i className="fa fa-ellipsis-v"></i></div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Messages;
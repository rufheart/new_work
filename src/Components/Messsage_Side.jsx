import React, { useContext, useEffect } from "react";
import './Message_Side.css'
import { useState } from "react";
import { Context } from "./Context";
import { Outlet } from "react-router-dom";

function Messages(value){
    console.log(value.value)
    let {deyer} = useContext(Context)
    let [name, setName] = useState(value.value)
    let [userid, setUserid] = useState(false)

    useEffect(()=>{
        for(let i of deyer){
            if(i.id==value.value){
                setUserid(i.username)

            }
        }
    }, [])
    console.log(userid,'suerid')
    
    return(
        <div className="message">
            <div>  {/*header message div*/}
                <div>
                    <div><img src={require('../sekil.jpg')} alt="" /></div>
                    <div>
                        <div></div>
                        {userid==false?null:<div>{'soz'}</div>}
                        <div><span>count</span><span>How much user online</span></div>
                    </div>
                </div>
                <div><i className='fa fa-search'></i><i className="fa fa-ellipsis-v"></i></div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Messages;
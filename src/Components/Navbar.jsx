import React  from "react";
import {useRef} from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";
import { useContext } from "react";
import { Context } from "./Context";
import Messages from "./Messsage_Side";



function Navbar(){

    let [ic, setIc] = useState('fa fa-bars')
    let {deyer} = useContext(Context)
    function change(){
        setIc('fa fa-arrow-left')
    }

    function reverse(){
        setIc('fa fa-bars')
    }
    function navclick(){

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
                        <div>
                            <NavChat value={value} />
                            {/* <NavLink to='/' activeclassname="current" onClick={navclick}>
                                <div>
                                    <div>
                                        <div>
                                            <img src={require('../sekil.jpg')} alt="" />
                                        </div>
                                        <div>
                                            <div></div>
                                            <div>{value.username}</div>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </NavLink>  */}
                        </div>
                        
                    )
                })}
                
            </div>
        </div>
    )
}

function NavChat({value}){
    let {deyer} = useContext(Context)
    let ref = useRef(null)
    let [sref, setSref] = useState(false)
    function navclick(){
        for(let i of deyer){
            // console.log(i)
            if(i.username == ref.current.outerText){
                setSref(i.id);
                // console.log(i)
                
            }
        }
        // setSref([])
    }
    // console.log(sref,'sref')

    return(
        <div className="navchat">
            <NavLink to='/' activeclassname="current" onClick={navclick} ref={ref}>
                <div>
                    <div>
                        <div></div>
                        <div>{value.username}</div>
                        <div><img src="" alt="" /></div>
                    </div>
                    {sref==false?null:<Messages value={sref}/>}
                </div>
            </NavLink> 
        </div>
    )
}


export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){


    return(
        <div className="navbar">
            <div className="chat_list_header">

            </div>
            <div className="chat_list_body">
                <NavLink to='/' activeClassName="current">
                    <div>
                        <div>
                            <div>Tipi</div>
                            <div>Istifadeci adi</div>
                            <div><img src="" alt="" /></div>
                        </div>
                        <div></div>
                    </div>
                </NavLink>
                <NavLink to='/login' activeClassName="current">
                    <div>
                        <div>Tipi</div>
                        <div>Istifadeci adi</div>
                        <div><img src="" alt="" /></div>
                    </div>
                    <div></div>

                </NavLink>
            </div>
        </div>
    )
}


export default Navbar;
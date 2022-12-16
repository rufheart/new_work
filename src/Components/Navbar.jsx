import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){


    return(
        <div>
            <ul>
                <NavLink>
                    <li>
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p>Userin adi</p>
                                <p>Mesajin bir hisessi</p>
                            </div>
                        </div>
                    </li>
                </NavLink>
                <NavLink>
                    <li>
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p>Userin adi</p>
                                <p>Mesajin bir hisessi</p>
                            </div>
                        </div>
                    </li>
                </NavLink>
                <NavLink>
                    <li>
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p>Userin adi</p>
                                <p>Mesajin bir hisessi</p>
                            </div>
                        </div>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}


export default Navbar;
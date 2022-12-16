import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

let Context = createContext();

function Provider({children}){

    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default Provider;
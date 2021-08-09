import { createContext } from "react";
import { useState } from "react";

const Context = createContext(null);
export default Context;

export function UserContext({children}) {
    const [login,setLogin]=useState(false);
    const User={
        login:login,
        loginUser:()=>{
           setLogin(!login)
        }
    }
    return (
        <Context.Provider value={User}>
            {children}
        </Context.Provider>
    )

}



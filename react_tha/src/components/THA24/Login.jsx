import React from 'react'
import { useContext } from 'react'
import  Context  from "./userContext";
export default function Login() {
   const logger = useContext(Context);
   const logUser=()=>{
    logger.loginUser();
}
    return (
        <div>
            {
                <button onClick={logUser}>{logger.login?("Logout"):("Login")}</button>
            }
        </div>
    )
}

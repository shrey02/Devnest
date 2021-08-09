import React from 'react'
import { useContext } from 'react'
import  Context  from "./userContext";
import { Redirect } from 'react-router';

export default function Home() {
    const logger = useContext(Context);
    return (
        <div>
            {
                logger.login?("Home"):(<Redirect to="/tha24/Login"></Redirect>)
            }
        </div>
    )
}

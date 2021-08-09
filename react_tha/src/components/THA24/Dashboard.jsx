import React from 'react'
import { useContext } from 'react'
import  Context  from "./userContext";
import { Redirect } from 'react-router';

export default function Dashboard() {
    const logger = useContext(Context);
    return (
        <div>
            {
                logger.login?("Dashboard"):(<Redirect to="/tha24/Login"></Redirect>)
            }
        </div>
    )
}

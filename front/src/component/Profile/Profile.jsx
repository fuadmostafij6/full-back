import React from 'react'
import Axios from 'axios'
import { useParams } from "react-router";

const Profile = () => {
    
    const { user } = useParams();
   
    
    return (
        <div>
            
                
         
            <h2>{user}</h2>

           
        </div>
    )
}

export default Profile

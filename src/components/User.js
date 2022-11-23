import React from "react";
import { Link, useParams } from "react-router-dom"

const User = () => {

    const {userId} = useParams()

    return (
        <div>
            <h1>User: {userId}</h1>

            <Link to="/users" >Back to users</Link>
        </div>
    )
}

export default User
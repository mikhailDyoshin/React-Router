import React from "react";
import { Link, Outlet } from "react-router-dom"

const User = (users) => {
    return (
        <div>
            <h1>User</h1>

            {/* User component navigation */}
            <nav>
                <Link to="profile">Profile</Link>
                <Link to="account">Account</Link>
            </nav>

            <Outlet />
        </div>
    )
}

export default User
import React from "react";
import { Link, Outlet } from "react-router-dom";
 
const Users = ({ users }) => {
    return (
      <div>
        <h2>Users</h2>
  
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={user.id}>
                {user.fullName}
              </Link>
            </li>
          ))}
        </ul>

        <Outlet />
      </div>
    );
  };

export default Users
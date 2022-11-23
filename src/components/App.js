import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import components
import Home from "./Home"
import User from "./User"
import NoMatch from "./NoMatch"
import Profile from "./Profile"
import Account from "./Account"


const App = () => {

    const users = [
        {
            id: '1', 
            fullName: 'Robin Wieruch',
        },
        {
            id: '2',
            fullName: 'Sarah Finnley',
        },
    ]

    return (
        <BrowserRouter>
            <div>
                <h1>React Router</h1>

                {/* App's navigation */}
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/user">User</Link>
                </nav>

                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="home" element={<Home />}/>
                    <Route path="user" element={<User users={users}/>} >
                        <Route index element={<Profile />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="account" element={<Account />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
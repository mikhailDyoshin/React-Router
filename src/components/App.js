import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import components
import Home from "./Home"
import User from "./User"
import NoMatch from "./NoMatch"
import Users from "./Users"


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
                    <Link to="/users">User</Link>
                </nav>

                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="home" element={<Home />}/>
                    <Route path="users" element={<Users users={users}/>} >
                        <Route path=":userId" element={<User />} />
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
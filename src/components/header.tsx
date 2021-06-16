import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 


export const Header = () => {
    return (
        <div>
            <Link to = "/">Home</Link>
            <Link to = "/login">Login</Link>
            <Link to = "/news">News</Link>
            <Link to = "/profile">Profile</Link>
        </div>
    )
}

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './components/home';
import { Login } from './components/login';
import { News } from './components/news';
import { Profile } from './components/profile';

export const useRoutes = () => {
    return(
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/news" component={News}/>
            <Route path="/profile" component={Profile}/>
        </div>
    )
}


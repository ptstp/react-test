import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './components/home';
import { Buy } from './components/buy';
import { About } from './components/about';
import { Contacts } from './components/contacts';

export const useRoutes = () => {
    return(
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/buy" component={Buy}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
        </div>
    )
}


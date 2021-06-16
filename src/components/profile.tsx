import React,{ useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

//import './App.css'

export const Profile = () => {
    const {isAuth, username, password} = useContext(AuthContext);
    if(isAuth != true)
    {
        return(
            <Redirect to="/login"/>
        )
    }
  return (
    <div className="container">
      <h1>{username} / {password}</h1>
      
    </div>
  )
}
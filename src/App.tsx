import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { useRoutes } from './router';
import { useAuth } from './context/AuthContext';
import { AuthContext } from './context/AuthContext';

function App() {
  const routes = useRoutes();
  const {isAuth, login, username, password} = useAuth();
  return (
    <Router>
      <AuthContext.Provider value={{
          isAuth: isAuth, 
          login: login,
          username: username,
          password: password
      }}>
      <div className="App">  
        <Header/>
        {routes}
        <p>HELLO WORLD~</p>
      </div>
    </AuthContext.Provider>
    </Router>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/

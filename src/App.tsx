import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { useRoutes } from './router';

function App() {
  const routes = useRoutes();
  return (
    <Router>
    <div className="App">  
      <Header/>
      {routes}
      <p>HELLO WORLD~</p>
    </div>
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

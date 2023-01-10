import './App.css';
import imag from './img/cat_transparent.gif';
import { Router, Route } from 'react-router-dom';
import React from 'react';

console.log("Starting...")

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className = "App-Selector"> 
          <a href='#'> Home </a>
          <a href='#'> About </a>
          <a href='#'> Projects </a>
          <a href='#'> Contact </a>
        </div> 
        <h3>
          Hello, I'm Andrés Martínez 👋
        </h3> 
        <img alt = "cat" className = "cat" src = {imag}/> 

        <div className="App-Description">
          <p>
          Undergraduate Student of B.S. in Computer Science 
          <br/>@ Tecnológico de Monterrey CSN 
          </p>
          <a 
            className="App-link"
            href="https://github.com/andresdanielmtz"
            target="_blank"
            rel="noopener noreferrer"
          >
            about myself 
          </a>
          <br/>
         
          <a 
            className="App-link"
            href="https://github.com/andresdanielmtz" // TODO: change this
            target="_blank"
            rel="noopener noreferrer"
          >
            github 
          </a>
          

        </div>
      </header>
      <div className = "App-body"> 
        Hello!

      </div>
    </div>
        
  );
}

export default App;

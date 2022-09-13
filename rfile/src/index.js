import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const name = 'John'
root.render(
  <React.StrictMode>
    <div>
        <h1>Hello, {name}</h1>
        <input></input>
    </div>
  </React.StrictMode>
);


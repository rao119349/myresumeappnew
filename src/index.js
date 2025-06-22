import React from 'react';
import ReactDOM from 'react-dom/client';

// Uncomment this for testing the App.js file
// import App from './App';

// Uncomment this for testing the Main.js file
import App from './Main';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
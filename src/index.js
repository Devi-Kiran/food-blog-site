import React from 'react';
import ReactDOM from 'react-dom/client';
import setupLocatorUI from "@locator/runtime"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// process.env.NODE_ENV === "development"
if (true) {
  setupLocatorUI();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

reportWebVitals();

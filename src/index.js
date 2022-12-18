import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Afterapp from './Afterapp';
import reportWebVitals from './reportWebVitals';
import Provider from './Components/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider>
      <Afterapp/>
    </Provider>
  </BrowserRouter>
);


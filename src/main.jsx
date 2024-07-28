import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import App from './App';
import { newsSlice } from './api/newsSlice';

const root = createRoot(document.getElementById('root'));


root.render(
  <Router >
    <App />
  </Router>
)
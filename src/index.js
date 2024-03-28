import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './App';
const Header = lazy(() => import('./components/organisms/header/Header.jsx'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Header' element={<Header />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

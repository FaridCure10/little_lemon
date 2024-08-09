import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './App';
import BookingPage from './components/pages/booking-page/BookingPage.jsx';
import ConfirmedPage from './components/pages/confirmed-page/ConfirmedPage.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/reservations' element={<BookingPage />} />
        <Route path='/confirmed' element={<ConfirmedPage />} />
      </Routes>
    </BrowserRouter>
  
);

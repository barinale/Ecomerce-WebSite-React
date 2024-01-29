import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css'
import { RouterProvider } from 'react-router-dom';
import { Routers } from './Router/AllRouter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={Routers} />
  </React.StrictMode>
);


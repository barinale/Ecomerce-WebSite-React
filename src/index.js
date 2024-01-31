import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css'
import { RouterProvider } from 'react-router-dom';
import { Routers } from './Router/AllRouter';

//********For Reducere******** */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
//**************** */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={Routers} />
  </React.StrictMode>
);


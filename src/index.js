import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css'
import { RouterProvider } from 'react-router-dom';
import { Routers } from './Router/AllRouter';
import { Provider } from 'react-redux';
import store from './Redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={Routers} />
    </Provider>     
  </React.StrictMode>
);


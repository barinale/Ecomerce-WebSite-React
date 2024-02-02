import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css'
import { RouterProvider } from 'react-router-dom';
import { Routers } from './Router/AllRouter';
import {ContextCompoenet} from './hooks/ContextApi'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextCompoenet>
        <RouterProvider router={Routers} />
    </ContextCompoenet>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './pages/Navbar';
import Result from './pages/Result'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Navbar />
    </div>,
  },
  {
    path: "/results",
    element: 
    <div>
      <Result />
    </div>,
  },
]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
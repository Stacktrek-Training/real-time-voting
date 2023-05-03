import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './pages/Navbar';
import Result from './pages/Result'
import Report from './pages/Report'
import About from './pages/About'
import Home from './pages/Home.jsx'
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
  {
    path: "/report",
    element: 
    <div>
      < Report/>
    </div>,
  },
  {
    path: "/about",
    element: 
    <div>
      < About/>
    </div>,
  },
  {
    path: "/home",
    element: 
    <div>
      < Home/>
    </div>,
  },
]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
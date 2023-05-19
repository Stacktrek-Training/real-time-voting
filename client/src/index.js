import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './pages/Admin/Navbar';
import Result from './pages/Admin/Result'
import Report from './pages/Admin/Report'
import About from './pages/Admin/AboutPage'
import Home from './pages/Admin/Home.jsx'
import Nav2 from './pages/Users/Navbar'
import Finish from './pages/Admin/Finish'
import Userresult from './pages/Users/Result'
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
  {
    path: "/users",
    element: 
    <div>
      < Nav2/>
    </div>,
  },
  {
    path: "/finish",
    element: 
    <div>
      <Finish />
    </div>,
  },
  {
    path: "/userresult",
    element: 
    <div>
      <Userresult />
    </div>,
  },
]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
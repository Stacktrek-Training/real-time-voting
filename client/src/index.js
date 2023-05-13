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
import Meeting from './pages/Admin/Meeting'
import Multiplechoice from './pages/Admin/Multiple'
import Finish from './pages/Admin/Finish'
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
    path: "/multiplechoices",
    element: 
    <div>
      <Multiplechoice />
    </div>,
  },
  {
    path: "/meeting",
    element: 
    <div>
      <Meeting />
    </div>,
  },
  {
    path: "/finish",
    element: 
    <div>
      <Finish />
    </div>,
  },
]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
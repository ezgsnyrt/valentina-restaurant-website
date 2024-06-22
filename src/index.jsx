import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Services from './pages/Services';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "reservation",
    element: <Reservation />,
  },
  {
    path: "services",
    element: <Services />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

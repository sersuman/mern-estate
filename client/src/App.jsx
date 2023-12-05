import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/sign-in",
    element: <Signin />
  },
  { 
    path: "/sign-up",
    element: <Signup />
  }
])
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

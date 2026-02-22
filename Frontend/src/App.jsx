import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Fallback from './Pages/Fallback/Fallback';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/SignUp';
import ProtectedRoute from './Auth/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "", element: <Home></Home>
        },
        {
          path: "/login", element: <Login></Login>
        },
        {
          path: "/sign-up", element: <SignUp></SignUp>
        },
        {
          path: "/dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute>
        },
        {
          path: "*", element: <Fallback></Fallback>
        }
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

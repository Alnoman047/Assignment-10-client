import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Register from './Pages/Register/Register.jsx';
import Error from './Pages/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[{
      path:"/",
      element:<Home></Home>
    },{
     path: "/login",
     element:<Login></Login>
    },{
      path:"/register",
      element:<Register></Register>
    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)

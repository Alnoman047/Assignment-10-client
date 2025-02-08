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
import AddCraftItem from './Pages/AddCraftItem/AddCraftItem.jsx';
import ViewDetails from './Pages/ViewDetails/ViewDetails.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import AllCartItems from './Pages/AllCartItems/AllCartItems.jsx';
import MyCartList from './Pages/MyCartList/MyCartList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[{
      path:"/",
      element:<Home></Home>,
      
    },{
     path: "/login",
     element:<Login></Login>
    },{
      path:"/register",
      element:<Register></Register>
    },{
      path:"/addCraftItem",
      element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
    },{
      path:"viewDetails/:id",
      element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      loader:({params})=> fetch(`http://localhost:5000/addItems/${params.id}`)
    },{
      path:"/allItems",
      element:<AllCartItems></AllCartItems>,
      loader:()=> fetch("http://localhost:5000/addItems")
    },{
      path:"/myCart",
      element:<PrivateRoute><MyCartList></MyCartList></PrivateRoute>,
      loader:()=> fetch("http://localhost:5000/addItems")
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

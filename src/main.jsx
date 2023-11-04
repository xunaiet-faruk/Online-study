import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainroute from './Pages/Mainroute/Mainroute';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Authprovider from './Auth/Authprovider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroute></Mainroute>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
     <Authprovider>
      <RouterProvider router={router} />
     </Authprovider>

  </React.StrictMode>,
)

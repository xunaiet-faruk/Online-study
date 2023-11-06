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
import Assinment from './Component/Assinment/Assinment';
import Createassinment from './Component/Create/Createassinment';
import Privateroute from './Firebase/Privateroute';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import Deatils from './Component/Viewdeatils/Deatils';
import Update from './Component/Update/Update';
import Submit from './Submitassinments.jsx/Submit';

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
      },
      {
        path:'/assignments',
        element:<Assinment></Assinment>
      },
      {
        path:'/create',
        element: <Privateroute><Createassinment></Createassinment></Privateroute>
      },
      {
        path:'/details/:id',
        element:<Privateroute><Deatils></Deatils></Privateroute>,
        loader: ({ params }) => fetch(`http://localhost:5000/create/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/create/${params.id}`)

      },
      {
        path:'/submitted',
        element:<Submit></Submit>,
        
     
      }
      
    ]
  },
]);

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>

    </QueryClientProvider>
  </React.StrictMode>,
)

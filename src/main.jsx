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
import { Toaster } from 'react-hot-toast';
import Feedback from './Submitassinments.jsx/Feedback';
import Myassinments from './Component/Myassinmnet/Myassinments';
import Error from './Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroute></Mainroute>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/assignments',
        element: <Assinment></Assinment>,
        loader: () => fetch('https://onlice-course-backend.vercel.app/create')
      },
      {
        path: '/create',
        element: <Privateroute><Createassinment></Createassinment></Privateroute>
      },
      {
        path: '/details/:id',
        element: <Privateroute><Deatils></Deatils></Privateroute>,
        loader: ({ params }) => fetch(`https://onlice-course-backend.vercel.app/create/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://onlice-course-backend.vercel.app/create/${params.id}`)

      },
      {
        path: '/submitted',
        element: <Privateroute><Submit></Submit></Privateroute>,
        loader: () => fetch('https://onlice-course-backend.vercel.app/fromassinmetns', { credentials: 'include' })

      },
      {
        path: '/fromassinmetns/:id',
        element: <Privateroute><Feedback></Feedback></Privateroute>,
        loader: ({ params }) => fetch(`https://onlice-course-backend.vercel.app/fromassinmetns/${params.id}`)
      },
      {
        path: '/myassinment',
        element: <Privateroute><Myassinments></Myassinments></Privateroute>
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
    <Toaster></Toaster>
  </React.StrictMode>,
)

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import Details from "../Details/Details";
import PrivetRoute from "./PrivetRoute";

  export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`https://task-server-arifhasan1402-gmailcom.vercel.appcourse`)
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/signUp',
              element:<SignUp></SignUp>
            },
            {
              path:'/details/:id',
              element:<PrivetRoute><Details></Details></PrivetRoute>,
              loader:()=>fetch(`https://task-server-arifhasan1402-gmailcom.vercel.appcourse`)
            }
        ]
    }
  ])
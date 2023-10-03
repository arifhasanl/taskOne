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
                loader:()=>fetch(`http://localhost:5000/course`)
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
              loader:()=>fetch(`http://localhost:5000/course`)
            }
        ]
    }
  ])
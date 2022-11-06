import { Outlet, Navigate } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useIsLoggedIn, useCurrentUser } from "../config/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function Layout() {
  
  const isLoggedIn = useIsLoggedIn();

if (isLoggedIn === null) return <h1>Loading...</h1>;
  else if (isLoggedIn === false) return <Navigate replace to="/login" />;
  return <Outlet/>;
    
    
   }
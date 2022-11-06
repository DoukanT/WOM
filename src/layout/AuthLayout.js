
import { Outlet, Navigate } from "react-router-dom";
import {useIsLoggedIn} from "../config/hooks";
import { useSelector} from "react-redux"
export default function AuthLayout() {
        const isLoggedIn = useIsLoggedIn();
      
        const error = useSelector((state) => state.auth.error);
      
        if (isLoggedIn === null) return <h1>Loading...</h1>;
        else if (isLoggedIn === true) return <Navigate replace to="/" />;
      
        return <Outlet />;
      }
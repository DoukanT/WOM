import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import registerForm from "../pages/registerForm";
import loginForm from "../pages/loginForm";
import Login from"../pages/loginForm"
import Register from"../pages/registerForm"
import Forget from"../pages/forgetForm"
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";

export default function Router(){
    return (
        
            <Routes>
     
     {/* <Route path='/RecommendationPage' element={<RecommendationPage />} />
     <Route path='/UserListPage' element={<UserListPage />} />
     <Route path='/LaterPage' element={<LaterPage />} /> */}
     <Route element={<Layout />}>
       <Route path='/' exact element={<Homepage />} />
     </Route>


     <Route element={<AuthLayout/>}>

      <Route path='/forget' element = {<Forget />} />
       <Route path='/register' element = {<Register />} />
       <Route path='/login' element = {<Login />} />
        
     </Route>

   </Routes>
       
    )    
}
import React from "react"
import {Link} from "react-router-dom"
import "./loginForm.css"
import Logo from "../logo.png"
import { useSelector,useDispatch } from "react-redux"
import { changeEmail,changePassword,logIn  } from "../redux/authSlice";

const loginForm = () => {
    
    const email =useSelector(state => state.auth.email);
    const password =useSelector(state => state.auth.password);

    const dispatch = useDispatch();
    const error =useSelector(state => state.auth.error);

    
    
    const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value));
      };
    
      const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
      };  


    return (
        <div className="login-box">
            <img src={Logo} alt="" className="avatar" />
            {error && (
              <label >{error}</label>
            )} 
            <h1>Login</h1>

            <form onSubmit={handleSubmit}> 
                <label>E-mail</label>
                <input type="text" placeholder="Enter e-mail"  value={email} onChange={handleEmailChange}/>

                <label>Password</label>
                <input type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange}/>

                <input type="submit" value="Log in" />

                <Link to="/forget" className="link"> Lost your password? </Link><br/>
                <Link to="/register" className="link"> Don't have an account? </Link>
            
            </form>
        </div>
    )
}

export default loginForm;
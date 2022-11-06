import React from "react"
import {Link} from "react-router-dom"
import "./loginForm.css"
import Logo from "../logo.png"

const loginForm = () => {
    return (
        <div className="login-box">
            <img src={Logo} alt="" className="avatar" />
            <h1>Login</h1>

            <form>
                <label>E-mail</label>
                <input type="e-mail" placeholder="Enter E-mail" />

                <label>Password</label>
                <input type="password" placeholder="Enter Password" />

                <input type="submit" value="Log in" />

                <Link to="/forget" className="link"> Lost your password? </Link><br/>
                <Link to="/register" className="link"> Don't have an account? </Link>
            
            </form>
        </div>
    )
}

export default loginForm;
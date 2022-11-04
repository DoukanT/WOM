import React from "react"
import {Link} from "react-router-dom"
import "./registerForm.css"
import Logo from "../logo.png"

const registerForm = () => {
    return (
        <div className="register-box">
            <img src={Logo} alt="" className="avatar" />
            <h1>Register</h1>

            <form>
                <label>Username</label>
                <input type="text" placeholder="Enter Username" />

                <label>E-mail</label>
                <input type="text" placeholder="Enter E-mail Adress" />

                <label>Password</label>
                <input type="password" placeholder="Enter Password" />

                <input type="submit" value="Register" />

                <Link to="/login" className="link"> Do have an account? </Link>
            </form>
        </div>
    )
}

export default registerForm;
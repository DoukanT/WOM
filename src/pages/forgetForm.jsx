import React from "react"
import {Link} from "react-router-dom"
import "./forgetForm.css"
import Logo from "../logo.png"

const forgetForm = () => {
    return (
        <div className="forget-box">
            <img src={Logo} alt="" className="avatar" />
            <h1>Did You Forget Your Password?</h1>

            <form>
                
                <label>Username</label>
                <input type="text" placeholder="Enter Username" />
                {/* <label>Security Answer</label>
                <input type="text" placeholder="Enter Secret Code" /> */}

                <input type="submit" value="Next" />

                <Link to="/login" className="link"> Back to login </Link><br/>
                <Link to="/register" className="link"> Don't have an account? </Link>
            
            </form>
        </div>
    )
}

export default forgetForm;
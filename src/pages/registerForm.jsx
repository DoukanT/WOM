import React from "react"
import {Link} from "react-router-dom"
import "./registerForm.css"
import Select from 'react-select';
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
                <input type="e-mail" placeholder="Enter E-mail Adress" />

                <label>Password</label>
                <input type="password" placeholder="Enter Password" />

                <label>Secret Answer</label>
                <select className="select"> 
                    <option disabled selected value="w-error" style={{ color:"grey"}}  >--Select One Question--</option>
                    <option value="w-food">What is your favorite food?</option>
                    <option value="w-teacher">Who is your favorite teacher at high school?</option>
                    <option value="w-pet">What is your first pet's name?</option>
                    <option value="w-animal">What is your favorite animal?</option>
                    <option value="w-nickname">What was/is your nickname?</option>
                    <option value="w-family">What is your family nickname?</option>
                </select>
                <input type="secret" placeholder="Enter Secret Answer" />

                <input type="submit" value="Register" />

                <Link to="/login" className="link"> Do have an account? </Link>
            </form>
        </div>
    )
}

export default registerForm;
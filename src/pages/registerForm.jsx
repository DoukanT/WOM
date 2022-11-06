import React from "react"
import {Link} from "react-router-dom"
import "./registerForm.css"
import Select from 'react-select';
import Logo from "../logo.png"
import { useSelector,useDispatch} from "react-redux"
import { changeName,changeEmail,changePassword,register } from "../redux/authSlice";


const registerForm = () => {
<<<<<<< Updated upstream

=======
    const name =useSelector(state => state.auth.name);
    const email =useSelector(state => state.auth.email);
    const password =useSelector(state => state.auth.password);
    const error =useSelector(state => state.auth.error);

    
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        dispatch(changeName(e.currentTarget.value));
      };
    
      const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value));
      };
    
      const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
      };
      
>>>>>>> Stashed changes
    return (

        <div className="register-box">
            <img src={Logo} alt="" className="avatar" />
             {error && (
              <label >{error}</label>
            )} 
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" placeholder="Enter Username"  value={name} onChange={handleNameChange}/>

<<<<<<< Updated upstream
=======
                <label>E-mail</label>
                <input type="text" placeholder="Enter E-mail Adress" value={email}onChange={handleEmailChange}/>

>>>>>>> Stashed changes
                <label>Password</label>
                <input type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange}/>

<<<<<<< Updated upstream
                <label>Security Question</label>
                <select className="select"> 
                    <option disabled selected value="w-error" style={{ color:"grey"}}>--Select One Question--</option>
                    <option value="w-food">What is your favorite food?</option>
                    <option value="w-teacher">Who is your favorite teacher at high school?</option>
                    <option value="w-pet">What is your first pet's name?</option>
                    <option value="w-animal">What is your favorite animal?</option>
                    <option value="w-nickname">What was/is your nickname?</option>
                    <option value="w-family">What is your family nickname?</option>
                </select>
                <input type="secret" placeholder="Enter Security Answer" />

                <input type="submit" value="Register" />
=======
                <input  type="submit" value="Register" />
>>>>>>> Stashed changes

                <Link to="/login" className="link"> Do you have an account? </Link>
            </form>
        </div>
    )
}

export default registerForm;
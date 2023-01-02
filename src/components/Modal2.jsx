import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';


const Modal2 = ({open,onClose}) => {

    const [currentpassword, setcurrentPassword] = useState('');
    const [newpassword, setnewPassword] = useState('');


    if(!open) return null

      
     const reauthenticate = (currentPassword) => {
        var user =  UserAuth().currentUser;
        var cred =  UserAuth().EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
      }
      
    const onChangePasswordPress = () => {
        this.reauthenticate(this.state.currentPassword).then(() => {
            var user =  UserAuth().currentUser;
          user.updatePassword(this.state.newPassword).then(() => {
            alert("Password was changed");
          }).catch((error) => { console.log(error.message); });
        }).catch((error) => { console.log(error.message) });
      }
    
    
    
    
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }} 
      >
        <div className='modalRight'>
          <div className="bg-white p-2 rounded w-72">
          <button onClick={onClose} className='closeBtn' >
            X
          </button>
        <h1 className="font-semibold text-center text-xl text-gray-700 mb-5">
          Change Password
        </h1>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Current Password"
            value={currentpassword}
            autoCapitalize="none" secureTextEntry={true}
            onChange={(e) => setcurrentPassword(e.target.value) }

          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="New Password"
            value={newpassword}
            autoCapitalize="none" secureTextEntry={true}
            onChange={(e) => setnewPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button onClick={onChangePasswordPress} className="px-5 py-2 bg-gray-700 text-white rounded">
            Change
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Modal2
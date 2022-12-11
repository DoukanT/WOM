import React from 'react'

const Modal = ({open,onClose}) => {

    if(!open) return null

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
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Welcome back
        </h1>
        <p className="text-center text-gray-700 mb-5">Sign in</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="email@example.com"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="********"
          />
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
//tamamlandı
const WatchedLater = () => {
  const [laterList, setlaterList] = useState([]);
  const { user } = UserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setlaterList(doc.data()?.watchedLater);
    });
  }, [user?.email]);
  const userID = doc(db, 'users', `${user?.email}`);

  const unlaterMovie = async (passedID) => {
    localStorage.setItem(`laterState_${passedID}`, false);
    try {
      const result = laterList.filter((movie) => movie.id !== passedID)
      await updateDoc(userID, {
          watchedLater: result
      })
    } catch (error) {
        console.log(error)
    }
  };


  return (
    <>  
      <h2 className='text-white font-bold text-3xl p-6'>Watch Later</h2>
      <div className='relative flex items-center group'>
        <div>
          {laterList?.map((item, id) => (
          <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img
              className='w-full h-auto block'
              src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
              alt={item?.title}
            />
          <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p onClick={() => navigate("/Moviepage", { state: { id: item?.id } })} className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
              {item?.title}
            </p>
            <p onClick={()=> unlaterMovie(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
          </div> 
        </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default WatchedLater
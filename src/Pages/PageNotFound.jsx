import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react';
import { useEffect } from 'react';
import PageNotFoundAnimation from '../assets/PageNotFound.json';
import { ShoppingCartContext } from '../Context';


export default function PageNotFound() {


  const { loading } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer to navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate('/products'); // Navigate to the home page
    }, 5000);


    return () => clearTimeout(timer);
  }, [navigate]);




  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      {/* Lottie Animation */}
      <div className="flex justify-center items-center w-full h-3/4">
        <Lottie
          animationData={PageNotFoundAnimation}
          loop={true}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Redirect message */}
      <h1 className="text-xl font-bold text-gray-800 mt-1">Redirecting to product page...</h1>
    </div>


  )
}

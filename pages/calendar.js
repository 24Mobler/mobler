import React from 'react'
import Container from '../components/layout/Container'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import Carlendar from '../components/calendar/calender'

const Calender = () => {
  return (
    <div className='flex-col'>
    <div className="min-h-screen flex justify-center items-center">
    <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white space-y-10">
      <h2 className="text-2xl font-bold">When do you want delivery?</h2>
      <Carlendar />
      
      

       
    </div>
    
    <div>
   

        <div>

        </div>
    </div>
    </div>
   
  </div>
                  
                   
                    
          
  )
}

export default Calender


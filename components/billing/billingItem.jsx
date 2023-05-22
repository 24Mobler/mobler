import React from 'react'
import { useState } from 'react';
import Thanks from '../modal/thanks'



const billingItem = () => {
    const[showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
  return (
    <div>
   <Thanks visible={showModal}  onClose={handleOnClose}/>
    <div className=' flex-col mt-5 space-y-6'>
        <div className='flex justify-between'>
           
            <h1>Delivery date</h1>
            <h1>Jan,1,2022</h1>
           
        </div>
        <div className='flex justify-between'>
            <h1>Subtotal</h1>
            <h1>$3720,27</h1>
        </div>
        <div className='flex justify-between text-[ #4F4F4F]'>
            <h1>Discount</h1>
            <h1>-$749.99</h1>
        </div>
        <div className='flex justify-between text-[ #4F4F4F]'>
            <h1>Frame </h1>
            <h1>500 kr</h1>
        </div>
        <div className='flex justify-between text-[ #4F4F4F]'>
            <h1>Bedmadrass</h1>
            <h1>500 kr</h1>
        </div>
        <div className='flex justify-between text-[ #4F4F4F]'>
            <h1>Delivery </h1>
            <h1>$10.00</h1>
        </div>
        <div className='flex justify-between text-[ #4F4F4F]'>
            <h1>Tax</h1>
            <h1>$228.72</h1>
        </div>
        <hr className="mb-2" /> 
        <div className='flex justify-between font-bold'>
            <h1>Grand Total</h1>
            <h1>$3,439.00</h1>
        </div>
        <div>
            <input type="text" className='border p-4 w-full rounded' placeholder='Type here ...' />
        </div>
        <div className='flex gap-x-2'>
        <input    className='w-6 h-6' type="checkbox" id="myCheckbox"/>
            <p>Please check to acknowledge our <span className=' text-[#317BE0]'> Privacy & Terms Policy</span></p>
        </div>
        <div>
        <button className="justify-center text-[17px] text-white font-bold flex items-center py-3 w-full  mb-5 space-x-2 rounded-full bg-[#E16A2E]"
              type='submit'
              onClick={() =>{
                setShowModal(true)
              }}
             
            >Pay $3,439.00</button>
        </div>
    </div>
    </div>
  )
}

export default billingItem
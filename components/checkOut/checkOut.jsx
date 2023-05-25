import React from 'react'
import Link from 'next/link'


const checkOut = () => {
  return (
    <div className=' flex-col mt-5 space-y-6'>
       <div className='flex justify-between  gap-x-3 text-[ #4F4F4F]'>
        <input type="text" className='border p-2 w-2/5 rounded' placeholder='FirstName' />
        <input type="text" className='border p-2 w-3/5 rounded' placeholder='LastName' />
           
        </div>
        <div>
            <input type="text" className='border p-4 w-full rounded' placeholder='Email Address' />
        </div>
        <div>
            <input type="text" className='border p-4 w-full rounded' placeholder='Street Address' />
        </div>
       
        <div className='flex justify-between  gap-x-3 text-[ #4F4F4F]'>
        <input type="text" className='border p-2 w-2/5 rounded' placeholder='Zip/Postal Code' />
        <input type="text" className='border p-2 w-3/5 rounded' placeholder='Phone' />
           
        </div>
        <div className='flex justify-between gap-x-3  text-[ #4F4F4F]'>
        <input type="text" className='border p-2 w-2/5 rounded' placeholder='State/Province' />
        <input type="text" className='border p-2 w-3/5 rounded' placeholder='City' />
           
        </div>
        
     
        
        <div className='flex items-center gap-x-1 '>
        <input    className='w-3 h-3 border rounded' type="checkbox" id="myCheckbox"/>
            <p>My billing and shipping address are the same </p>
        </div>
        <div className='flex items-center gap-x-1'>
        <input    className='w-3 h-3 border rounded' type="checkbox" id="myCheckbox"/>
            <p>Create an account for later use </p>
        </div>
        <div className='flex justify-between  gap-x-3 text-[ #4F4F4F]'>
        <input type="text" className='border p-2 w-2/5 rounded' placeholder='Password' />
        <input type="text" className='border p-2 w-3/5 rounded' placeholder='Confirm Password' />
           
        </div>
        <div>
        <Link href="/billing">
        <button className="justify-center text-[17px] text-white font-bold flex items-center py-3 w-full  mb-5 space-x-2 rounded-full bg-[#E16A2E]"
              type='submit'
            >Next</button>
            </Link>
        </div>
    </div>
  )
}

export default checkOut
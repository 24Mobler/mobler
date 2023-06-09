import React from 'react'
import Container from '../../components/layout/Container'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import CartItem from '../../components/cart/CartItem'

const Cart = () => {
  return (
    <Container active="Cart">
        <div className="lg:w-[70vw] mx-auto">
            <Link href="/home" passHref>
                <div className="mt-10">
                <FaArrowLeft />
                </div>
            </Link>

            <div className="mt-6">
                <h2 className="text-[18px] font-semibold">Billing Summary</h2>
                {/* <span>3 items in card</span> */}

                <div className="flex flex-col space-y-3 mt-4">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <div className='flex justify-center'>
                    <Link href="/checkout">
                  
        <button className="justify-center  text-[17px] text-white font-bold flex items-center py-3 w-3/5  mb-5 space-x-2 rounded-full bg-[#E16A2E]"
              
             
            >Next</button>
            </Link> 
            </div>
                </div>
               
                
         
            </div>
        </div>
    </Container>
  )
}

export default Cart

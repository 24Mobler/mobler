import React from 'react'
import Container from '../components/layout/Container'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import CartItem from '../components/checkOut/checkOut'

const Checkout = () => {
  return (
    <Container>
        <div className="lg:w-[50vw] mx-auto">
            <Link href="/home" passHref>
                <div className="mt-10">
                <FaArrowLeft />
                </div>
            </Link>

            <div className="mt-6">
                <h2 className="text-[18px] font-bold">Billing Address</h2>
               
                <div className="flex flex-col space-y-3 mt-4">
                    <CartItem />
                    
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Checkout

import React from 'react'
import Container from '../components/layout/Container'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import Products from '../components/product/product'




const Product = () => {
  return (
    <main className='bg-[#F3F6F8] mt-0 sm:w-full'>
    <Container className=''>
        
        <div className="lg:w-[70vw] mx-auto">
            <Link href="/home" passHref>
                <div className="mt-10">
                <FaArrowLeft />
                </div>
            </Link>

            <div className="mt-6">
                <h2 className="text-[18px] font-bold">Include some details </h2>
               
                <div className="flex flex-col space-y-3 mt-4">
                    <Products/>
                    
                </div>
            </div>
        </div>
        
    </Container>
    </main>
  )
}

export default Product

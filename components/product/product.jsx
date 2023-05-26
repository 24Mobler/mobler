import React from 'react';
import { RiArrowGoBackFill, RiShareLine } from 'react-icons/ri';
import Link from 'next/link'


const Product = () => {
  return (
    <div className="flex-col space-y-3">
      <div className="relative rounded">
        <div className="absolute top-0 left-0 right-0">

       

        
            <RiArrowGoBackFill className="text-white bg-[#BFB5AB80] rounded p-2 text-4xl absolute top-4 left-4" />
         
          <button>
            <RiShareLine className="text-white  bg-[#BFB5AB80] rounded p-2 text-4xl absolute top-4 right-4" />
          </button>
        </div>
        <div
          className="w-full sm:w-full h-80 bg-center bg-cover border rounded-t-3xl"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/drczkfgqp/image/upload/v1684525360/Rectangle_5_likyay.png)',
          }}
        ></div>

        <div className="-mt-12 bottom-0 left-0 right-0 bg-[#ffff] rounded-3xl py-4 px-6">
          <div className="space-y-1">
            {/* div1 */}
            <div className="flex justify-between">
              {/* div 2 */}
              <div className="flex-col space-y-3">
                <div>
                  <h1 className="text-xl font-normal">Jan Sflanaganvik sofa</h1>
                </div>

                <div className="flex space-x-1 items-center">
                  <div className="relative">
                    <h1 className="bg-[#FFEEDD] rounded p-0.5 text-[#E6A25E]">used</h1>
                    <img
                      src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/Verified_nl2cfp.png`}
                      className="absolute  w-4 -right-3 -top-2"
                    />
                  </div>
                  <div className="text-slate-400">Verified Quality by us</div>
                </div>

                <div className="flex space-x-0.5">
                  <div className="bg-white border-2 rounded p-0.5">
                    <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/Length_d3ms86.png`} alt="" />
                  </div>
                  <div className="bg-white border-2 rounded p-0.5">
                    <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/ruer_ukv6fg.png`} alt="" />
                  </div>
                  <div className="bg-white border-2 rounded p-4">
                    <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/Weight_axiuh1.png`} alt="" />
                  </div>
                </div>
              </div>

              {/* div 3 */}

              <div className='flex-col space-y-3'>
                <div>
              <p className="text-xl text-[#E29547] font-bold">1000kr</p>
              </div>
              <div className="flex space-x-1 items-center">
            <button className="rounded px-1  border-2 border-[#E6A25E] bg-white text-[#E6A25E]">+</button>
            <h3>1</h3>
            <button className="rounded px-1.5 border-2 border-[#E6A25E] bg-white text-[#E6A25E]"> - </button>
          </div>
          <div className='flex-col'>
          <div>
          <p className="text-xl">Colours</p>
          </div>
          <div className='flex space-x-3'>
          <div className='bg-cyan-400  text-cyan-400 h-6 w-6'> gt</div>
          <div className='bg-amber-800  text-amber-800 h-6 w-6'> gt</div>
          <div className='bg-green-500 text-green-500 h-6 w-6'> gt</div>
          </div>
          </div>

              </div>
              
             
              
            </div>
            
          </div>
          
          <div className="flex-col mt-2 space-y-2 ">
          <h1 className="font-bold lg-[text-2xl] sm-[text-lg leading-7]">Choose what you want to buy Extra:</h1>
          <div className="flex space-x-2 items-center ">
            <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/Van_ty8e2w.png`} alt="" className='w-4 h-4 ' />
            <h1>1000.00 kr</h1>
          </div>
          <div className="flex  space-x-2 items-center">
            <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/chair_wp9sxk.png`} alt="" className='w-4 h-4 ' />
            <h1>1000.00 kr</h1>
          </div>
          <div className="flex  space-x-2 items-center">
            <input type="checkbox" id="myCheckbox" className="border-2 border-[#E6A25E] rounded w-4 h-4" />
            <h3>Frame = 500 kr</h3>
          </div>
          <div className="flex space-x-2 items-center">
            <input type="checkbox" id="myCheckbox" className="border-2 border-[#E6A25E] rounded w-4 h-4" />
            <h3>Madrass = 1000 kr</h3>
          </div>
          <div className="flex  space-x-2 items-center">
            <input  type="checkbox" id="myCheckbox" className="border-2 border-[#E6A25E] rounded w-4 h-4" />
            <h3>Bedmadrass = 500 kr</h3>
          </div>
          <h1 className="text-xl text-[#E29547] font-bold ">Total: 2700 kr</h1>
        </div>
        <div>
        <div className='bg-[#F3F6F8] py-5 px-1 rounded mt-2'>
            <div>
          <h1 className="text-xl text-[#E29547] font-bold mt-2">Description</h1>
          <div className='mt-2'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Nunc consectetur velit at massa vehicula, quis fringilla urna gravida.
          </p>
          </div>
          </div>
        
          </div>
        </div>
        <div>
        <hr className=' mt-2   mb-2'/>
        </div>
        <div className="flex justify-evenly space-x-4 mt-4 ">
        <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684681936/Wishlist_znbrbl.png`}/>
        <Link href="/cart">
        <button className="p-2 flex-initial w-64 rounded-lg bg-[#E16A2E]">Add to cart</button>
        </Link>
       
      </div>
        </div>

      

      </div>
    </div>
  );
};

export default Product;

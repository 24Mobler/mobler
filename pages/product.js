import React from 'react';
import { RiArrowGoBackFill, RiShareLine } from 'react-icons/ri';
// import length from '../assets/length.png';
// import lengthy from '../assets/ruer.png';
// import Verified from '../assets/Verified.png';
// import weight from '../assets/Weight.png';
// import Van from '../assets/Van.png';
// import chair from '../assets/chair.png';
// import Wishlist from '../assets/Wishlist.png'

const ProductPage = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <RiArrowGoBackFill className="text-white text-2xl absolute top-4 left-4" />
        <RiShareLine className="text-white text-2xl absolute top-4 right-4" />
      </div>
      <div
        className="w-full h-80 bg-center bg-cover"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/drczkfgqp/image/upload/v1684525360/Rectangle_5_likyay.png)',
        }}
      ></div>
      <div className="-mt-12 bottom-0 left-0 right-0 bg-white rounded-t-3xl py-4 px-6">
        <div className="flex justify-around">
          <div>
            <h2 className="text-xl font-normal">Jan Sflanaganvik sofa</h2>
          </div>
          <div>
            <p className="text-xl text-[#E29547] font-bold">1000kr</p>
          </div>
        </div>
        {/* the second div starts here */}
        <div className="flex justify-around mt-4">
          <div className="flex space-x-3">
            <div className="relative">
              <h1 className="bg-[#FFEEDD] rounded p-0.5 text-[#E6A25E]">used</h1>
              <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/Verified_nl2cfp.png`} className="absolute -right-3 -top-2" />
            </div>
            <div className="mx-3 text-slate-400">Verified Quality by us</div>
          </div>
          <div className="flex space-x-0.5">
            <button className="mx-1 rounded -py-2 px-2 border-2 border-[#E6A25E] bg-white text-[#E6A25E]">+</button>
            <h3>1</h3>
            <button className="mx-1 rounded -py-2 px-2 border-2 border-[#E6A25E] bg-white text-[#E6A25E]">-</button>
          </div>
        </div>
        {/* The third body starts here */}
        <div className="flex justify-around mt-4">
          <div>
            <div className="flex space-x-0.5 ">
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
          <div>
            <h3 className="mb-2 text-slate-400">Available Colours</h3>
            <div className="flex space-x-0.5">
              <h1 className="bg-gray-600 text-gray-600 rounded p-0.5">used</h1>
              <h1 className="bg-blue-500 text-blue-500 rounded p-0.5">used</h1>
              <h1 className="bg-cyan-600 text-cyan-600 rounded p-0.5">used</h1>
            </div>
          </div>
        </div>
        {/* new div  */}
        <div className="flex-col ml-3 mt-4">
          <div>
          <h1 className="font-bold lg-[text-2xl] sm-[text-lg leading-7]">Choose what you want to buy Extra:</h1>
          <div className="flex mt-2 space-x-2">
            <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/Van_ty8e2w.png`} alt="" />
            <h1>1000.00 kr</h1>
          </div>
          <div className="flex mt-2 space-x-2">
            <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/chair_wp9sxk.png`} alt="" />
            <h1>1000.00 kr</h1>
          </div>
          <div className="flex mt-2 space-x-2">
            <input type="checkbox" id="myCheckbox" className="border-2 border-[#E6A25E] rounded w-6 h-6" />
            <h3>Frame = 500 kr</h3>
          </div>
          <div className="flex mt-2 space-x-2">
            <input type="checkbox" id="myCheckbox" className="border-2 border-[#E6A25E] rounded w-6 h-6" />
            <h3>Madrass = 1000 kr</h3>
          </div>
          <div className="flex mt-2 space-x-2">
            <input  type="checkbox" id="myCheckbox" className="border-2 border-[#E6A25E] rounded w-6 h-6" />
            <h3>Bedmadrass = 500 kr</h3>
          </div>
          <h1 className="text-xl text-[#E29547] font-bold mt-2">Total: 2700 kr</h1>
        </div>
        </div>
        <div className="bg-[#C2C2C2]  flex-col ml-2  mr-2 mt-4 rounded divide-y-4">
         <div className="p-5">
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
     
 
      <div className="flex justify-around mt-4 mb-16">
        <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684681936/Wishlist_znbrbl.png`}/>
        <button className="p-2 flex-initial w-64  rounded bg-[#E16A2E]">Add to cart</button>
       
      </div>
    </div>
  );
};

export default ProductPage;
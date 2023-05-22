import React from 'react'

const thanks = ({visible, onClose}) => {

    if(!visible){
        return null;
    }
  return (
    <div>

<div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none ">
  <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
  <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
    {/* content */}
    <div className="">
      {/* body */}
      <div className="text-center p-5 flex-auto justify-center">
        <div className="w-40 h-40 flex items-center  mx-auto">
        <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684793044/Group_1494_br0mkn.png`}/>
        </div>
        <h2 className="text-xl font-bold py-4">Congratulations!</h2>
        <p className="text-sm text-gray-500 px-8">Your Order has been placed please check the delivery status at Order Tracking page </p>
      </div>
      {/* footer */}
      <div className="p-3 mt-2 text-center space-x-4 md:block">
        
        <button onClick={onClose} className="mb-2 md:mb-0 bg-[#E16A2E] border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Close</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default thanks
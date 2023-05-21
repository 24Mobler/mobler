import React from 'react'


const UploadPage = () => {
  return (
    <div className='bg-[#F3F6F8]'>
    <main className=' lg:w-[70vw] mx-auto'>
      
    {/* 
    
    
    
    */}
    <div>
    <h1 className="flex items-center justify-center w-full ">Upload Photos</h1>
    
    {/* the upload form */}
    <div className="max-w-2xl mx-auto">
<div className="flex items-center justify-center w-full">

        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2  rounded-lg cursor-pointer bg-[#E29547] ">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-10 h-10 mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p className="mb-2 text-sm text-white dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-white dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
        </label>
    </div> 

	
    
</div>
    </div>
    
    
    
    {/* the upload button ends here */}

    {/* the category and price div stats here */}
   <div>
    {/* the category div starts here */}
    <div className=' mt-4'>
      
      {/* the img and text here div starts here */}
      <h1 className='ml-4'>Category*</h1>
      <div className=' bg-white mt-4 py-5 px-5 flex space-x-4  items-center  lg:[bg-cyan-600] '>
        <div >
        
          <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/chairCategory_ehob0j.png`}/>
        </div>
        <div className=' '>
          <h1 className='font-bold'>Furniture & home decore</h1>
          <h1>chair</h1>
        
        </div>
 {/* the img and text here div ends here */}
      </div>
       {/* the price starts here */}
       <div className='w-4/5 mt-3 ml-4'>
        <h1>Price*</h1>
        <input className='h-10 mt-2'
        type='number'/>
        {/* the price ends here */}
       </div>

{/* the category div ends here */}
    </div>
 {/* the category and price div ends here */}
   </div>
    {/* the category and price div stats here */}
   <div >
    {/* the category div starts here */}
    <div className='mt-3 ml-4' >
      <h1>Condition*</h1>
      {/* the checkbox here div starts here */}
      <div className='mb-3  ml-4 mt-3 flex space-x-6'>
       <div>
      <h1>new</h1>

</div>
<div>
<input   className='w-6 h-6'type="checkbox" id="myCheckbox"/>

</div>
       <div>
      <h1>used</h1>

</div>
<div>
<input    className='w-6 h-6' type="checkbox" id="myCheckbox"/>

</div>
       
      
 {/* the checkbox ends here */}
      </div>
       {/* the select color starts here */}
       <div>
      
        {/* the select color ends here */}
       </div>

{/* the category div ends here */}
    </div>
 {/* the category and price div ends here */}
   </div>
    {/* the height and model div stats here */}
  <div>
      <h1 className='ml-4'>Items Details*</h1>
      
      <div className=' py-4 px-3 flex items-center '>
        <div>
          <h1 className='mb-2'>Height</h1>
          <input  className='w-4/5  h-9 rounded' type='string'/>
        </div>
        <div>
          <h1 className='mb-2'>Width</h1>
          <input   className='w-4/5  h-9 rounded' type='string'/>
        </div>
        <div>
          <h1 className='mb-2'>Model</h1>
          <input  className='w-4/5   h-9 rounded' type='string'/>
        </div>
       
 {/* the img and text here div ends here */}
     
       

{/* the category div ends here */}
    </div>
 {/* the category and price div ends here */}
   </div>

     {/* the category and price div stats here */}
     <div>
    {/* the category div starts here */}
    <div >
      
      {/* the img and text here div starts here */}
     
       
      <div className='w-4/5 ml-4 '>
        <h1>Ad Title*</h1>
        <input  className='mt-2 h-10' type='number'/>
        {/* the price ends here */}
       </div>

     
       {/* the price starts here */}
        
       <div className='w-4/5 mt-2 ml-4'>
        <h1>describe what are you selling*</h1>
        <input className='mt-2  h-10'  type='number'/>
        {/* the price ends here */}
       </div>

      
{/* the category div ends here */}
    </div>
 {/* the category and price div ends here */}
   </div>
   <div className='items-center'>
   <button type="submit" className="block w-4/5 ml-12 mb-5 bg-[#E29547] mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Next</button>
   </div>
   <hr className="mb-2" />
   <div className='mt-16 text-[#F3F6F8]'>food</div>
    </main>
    </div>
  )
}

export default UploadPage


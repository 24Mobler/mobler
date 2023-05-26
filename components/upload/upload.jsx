import React from 'react'
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';

const colourOptions = [
    { value: 'Red', label: 'Red', color: '#FF0000' },
    { value: 'Green', label: 'Green', color: '#00FF00' },
    { value: 'Blue', label: 'Blue', color: '#0000FF' },
    { value: 'Purple', label: 'Purple', color: '#FF00FF' },
    { value: 'Yellow', label: 'Yellow', color: '#FFFF00' },
    { value: 'Indigo', label: 'Indigo', color: '#00FFFF' },
    { value: 'brown', label: 'brown', color: '#FFA500' },
  ];
  
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#F3F6F8',   border: 'none', 
    boxShadow: 'none'}),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };
  

const upload = () => {
    
  return (
    <div className=' space-y-4'>

<div className=' flex-col mt-1'>
<div className="max-w-2xl mx-auto">
<div className="flex items-center justify-center w-full">

        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2  rounded-lg cursor-pointer bg-[#E29547] ">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-10 h-10 mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-2-3m0 0l-2 3m3-3v12"></path></svg>
                <p className="mb-2 text-sm text-white dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-white dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
        </label>
    </div> 

	
    
</div>
    </div>
    <div className='space-y-1'>
     <h1 className='font-bold'>Category*</h1>
        <div className='flex justify-between bg-white p-5 rounded'>
        <img src={`https://res.cloudinary.com/drczkfgqp/image/upload/v1684678768/chairCategory_ehob0j.png`}/>
        <div className=' '>
          <h1 className='font-bold'>Furniture & home decore</h1>
          <h1>chair</h1>
        
        </div>
        </div>
        </div>
        <h1 className='font-bold'>Price*</h1>
        <div className='flex justify-between text-[ #4F4F4F]'>
        <input type="text" className='border p-2 w-full lg:w-2/5 rounded' placeholder='$50' />
        </div>
        <div className='space-y-4'>
        <h1 className='font-bold'>Conditions*</h1>
        <div className='flex justify-between text-[ #4F4F4F] items-center'>
            <div className='flex space-x-2'>
            <div className='flex space-x-1'>
                 <h1>Used</h1>
                 <input    className='w-6 h-6' type="checkbox" id="myCheckbox"/> 
            </div>
            <div className='flex space-x-1'>
                 <h1>New</h1>
                 <input    className='w-6 h-6' type="checkbox" id="myCheckbox"/> 
            </div>
            </div>
            <Select
    closeMenuOnSelect={false}
    defaultValue={[]}
    isMulti
    options={colourOptions}
    styles={colourStyles}
    placeholder="colors"
  />
            </div>
            
        </div>
        <div className='space-y-4'>

        <h1 className='font-bold'>Items Detail*</h1>
        <div className='flex justify-between text-[ #4F4F4F] space-x-2'>
        <div className='flex-col space-y-1'>
                 <h1 className='font-bold'>Height*</h1>
                 <input type="text" className='border p-2 w-full lg:w-2/5 rounded'  />
            </div>
            <div className='flex-col space-y-1'>
                 <h1 className='font-bold'>Width*</h1>
                 <input type="text" className='border p-2 w-full lg:w-2/5 rounded'  />
            </div>
            <div className='flex-col space-y-1'>
                 <h1 className='font-bold'>Model*</h1>
                 <input type="text" className='border p-2 w-full lg:w-2/5 rounded'  />
            </div>
        </div>
      
        </div>
        <hr className="mb-2" />

        <h1 className='font-bold'>Location*</h1>     
        <div className='flex justify-between items-center text-[ #4F4F4F]'>

            <h1 className='text-neutral-400 text-bold'>Choose</h1>
            <div className="relative inline-block">
  <select className="block appearance-none bg-transparent border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
    <option>USA</option>
    <option>SWEEDEN</option>
    <option>AMERICA</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fillCurrent h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M10 12l-6-6 1.5-1.5L10 9.5 16.5 3 18 4.5z"/>
    </svg>
  </div>
</div>

        </div>
        <hr className="mb-2 " />
        <h1 className='font-bold'>Ad Title*</h1>
        <div className='flex text-[ #4F4F4F]'>
        <input type="text" className='border p-4 w-full rounded lg:w-3/5' placeholder='' />
        </div>
        <h1 className='font-bold'>Describe what are you selling*</h1>
        <div className='flex font-bold'>
          
        <input type="text" className='border p-4 w-full rounded lg:w-3/5' placeholder='' />
        </div>
       
        <div className='flex gap-x-2'>
        <input    className='w-6 h-6' type="checkbox" id="myCheckbox"/>
            <p>Please check to acknowledge our <span className=' text-[#317BE0]'> Privacy & Terms Policy</span></p>
        </div>
        <div>
        <button className="justify-center text-[17px] text-white font-bold flex items-center py-2 w-full  mb-5 space-x-2 rounded-full bg-[#E16A2E]"
              type='submit'
              onClick={() =>{
                setShowModal(true)
              }}
             
            >Submit</button>
        </div>
    </div>
    

  )
}

export default upload
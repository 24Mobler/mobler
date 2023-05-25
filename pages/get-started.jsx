import React, { useState } from 'react';
import Container from '../components/onboarding/Container'
import { FaApple, FaEnvelope, FaFacebook, FaGoogle, FaLock, FaUser } from 'react-icons/fa'
import Link from 'next/link'
import SocialAuth from '../components/onboarding/SocialAuth'
import { RegisterUser } from "../apicalls/users";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignUpSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        try {
          const response = await RegisterUser({ name, email, password });
          if (response.success) {
            navigate("/login");
          } else {
            throw new Error(response.message);
          }
        } catch (error) {
          // Handle error
        }
      };

  return (
    <Container>
    <div className="flex flex-col lg:w-[60%] w-[100%]">
        <h2 className="lg:text-[36px] text-[30px] mt-4 font-bold">Welcome Here</h2>
        <span className="text-[13px] lg:text-[14px]">Please proceed to create your personal account!</span>

        <form className="mt-4 space-y-6"onSubmit={handleSignUpSubmit}>
            <div className="input-field">
                <label htmlFor="username" className="text-[16px] mx-2">Username:</label>
                <div className="flex items-center space-x-3 border border-[#ccc] rounded-full py-2 px-3">
                    <FaUser fill="#ccc" />
                    <input type="name" placeholder="johndoe19" className="outline-none w-full hover:outline-none" 
                         value={name}
                         onChange={ev => setName(ev.target.value)}
                    />
                </div>
            </div>
            <div className="input-field">
                <label htmlFor="email" className="text-[16px] mx-2">Email Address:</label>
                <div className="flex items-center space-x-3 border border-[#ccc] rounded-full py-2 px-3">
                    <FaEnvelope fill="#ccc" />
                    <input type="name" placeholder="johndoe@gmail.com" className="outline-none w-full hover:outline-none" 
                          value={email}
                          onChange={ev => setEmail(ev.target.value)}
                    />
                </div>
            </div>
            <div className="input-field">
                <label htmlFor="password" className="text-[16px] mx-2">Password:</label>
                <div className="flex items-center space-x-3 border border-[#ccc] rounded-full py-2 px-3">
                    <FaLock fill="#ccc" />
                    <input type="password" placeholder="******" className="outline-none w-full hover:outline-none" 
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                </div>
            </div>
            <div className="input-field">
                <label htmlFor="confirmPassword" className="text-[16px] mx-2">Confirm Password:</label>
                <div className="flex items-center space-x-3 border border-[#ccc] rounded-full py-2 px-3">
                    <FaLock fill="#ccc" />
                    <input type="password" placeholder="******" className="outline-none w-full hover:outline-none" />
                </div>
            </div>
            <button className="justify-center text-[14px] text-white font-bold flex items-center py-3 w-full space-x-2 rounded-full bg-[#E16A2E]"
        type='submit'
            >Create Account</button>
        </form>   
        <SocialAuth isLogin={false} />
    </div>
    </Container>
  )
}

export default Signup

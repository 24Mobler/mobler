import React, { useState} from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'
import SocialAuth from './SocialAuth'
import { LoginUser } from "../../apicalls/users";

const LoginWithPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      
      try {
        const response = await LoginUser({ email, password });
        if (response.success) {
          console.log(response)
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        // Handle error
      }
    };
  return (
    <div className="flex flex-col lg:w-[60%] w-[100%]">
        <h2 className="lg:text-[36px] text-[30px] mt-4 font-bold">Welcome Back</h2>
        <span className="text-[13px] lg:text-[14px]">Proceed to sign in with your credentials</span>

        <form className="mt-4 space-y-3" onSubmit={handleLoginSubmit}>
            <div className="input-field flex items-center space-x-3 border border-[#ccc] rounded-full py-2 px-3">
                <FaEnvelope fill="#ccc" />
                <input type="email" placeholder="johndoe@gmail.com" className="outline-none w-full"
                  required=""
                  value={email}
                  onChange={ev => setEmail(ev.target.value)}
                />
            </div>
            <div className="input-field flex items-center space-x-3 border border-[#ccc] rounded-full py-2 px-3">
                <FaLock fill="#ccc" />
                <input type="password" placeholder="******" className="outline-none w-full" 
                   required=""
                   value={password}
                   onChange={ev => setPassword(ev.target.value)} 
                />
            </div>
            <button className="justify-center text-[14px] text-white font-bold flex items-center py-3 w-full space-x-2 rounded-full bg-[#E16A2E]"
              type='submit'
            >Sign in</button>
        </form>   
        <SocialAuth isLogin={true} />
    </div>
  )
}

export default LoginWithPassword

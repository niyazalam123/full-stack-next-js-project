"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false);
  const [btnDisabled,setBtnDisabled]= useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: ""
  });

  // onchange function 
  function handleChange(e: any) {
    const { name, value } = e.target;
    setUserData((prev): any => {
      return {
        ...prev,
        [name]: value
      }
    })
  };

  useEffect(()=>{
    if (userData.userName.length>0 && userData.email.length>0 && userData.password.length>0){
      setBtnDisabled(false);
    }
    else{
      setBtnDisabled(true)
    }
  },[userData])

  // click function 

  async function handleSignup() {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/users/signup",userData);
      toast.success("signup successfully");
      router.push("/login");
    } catch (error:any) {
      console.log(error.message)
      toast.error("failed to signup ! try again");
    }
    finally{
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className='_signup1'>
        <h2 className='_signup2'>SignUp Here</h2>
        <div className='_signup3'>
          <label htmlFor="userName">Enter UserName</label>
          <input
            type="text"
            placeholder='userName'
            name="userName"
            value={userData.userName}
            onChange={handleChange}
          />
        </div>
        <div className='_signup3'>
          <label htmlFor="email">Enter email</label>
          <input
            type="email"
            placeholder='email'
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className='_signup3'>
          <label htmlFor="password">Enter password</label>
          <input
            type="password"
            placeholder='password'
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSignup} className='han_btn' disabled ={btnDisabled?true:false} style={{cursor:`${btnDisabled || isLoading ? "no-drop":"pointer"}`}}>{isLoading?"processing...":"signUp"}</button>
        <Link href="/login">Login here</Link>
      </div>
      <Toaster />
    </>
  )
}

export default page
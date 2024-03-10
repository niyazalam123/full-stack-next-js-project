"use client";
import Link from 'next/link';
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const page = () => {
  const router = useRouter();
  const [loading,setLoading] = useState(false);
  const [btnDisabled,setBtnDisabled] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
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
    if(userData.password.length>0 && userData.userName.length>0){
      setBtnDisabled(false);
    }
    else{
      setBtnDisabled(true);
    }
  },[userData])

  // click function 
  async function handleLogin() {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login",userData);
      toast.success('Login Successfully');
      router.push("/profile");
    } catch (error) {
      toast.error("something went wrong");
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <>
      <div className='_signup1'>
        <h2 className='_signup2'>Login Here</h2>
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
          <label htmlFor="password">Enter password</label>
          <input
            type="password"
            placeholder='password'
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleLogin} className='han_btn' disabled={btnDisabled?true:false} style={{cursor:`${btnDisabled || loading ?"no-drop":"pointer"}`}}>{loading?"Processing...":"login"}</button>
        <Link href="/signup">signup here</Link>
      </div>
      <Toaster />
    </>
  )
}

export default page
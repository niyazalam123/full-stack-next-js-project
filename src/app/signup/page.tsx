"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
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

  // click function 

  function handleSignup() {

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
        <button onClick={handleSignup} className='han_btn'>signUp</button>
        <Link href="/login">Login here</Link>
      </div>
    </>
  )
}

export default page
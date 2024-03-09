"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
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

  // click function 

  function handleLogin() {

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
        <button onClick={handleLogin} className='han_btn'>login</button>
        <Link href="/signup">signup here</Link>
      </div>
    </>
  )
}

export default page
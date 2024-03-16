"use client";
import React from 'react';

const page = () => {
  return (
    <>
    <div className='_Frg_pas1'>
        <div className='_Frg_pas2'>
            <h2>Forgot your password</h2>
            <p>We will send you an email for reset password! Check your email.</p>
            <div className='_Frg_pas3'>
                <label htmlFor="_one1">Enter Your Email</label>
                <input type="email" placeholder='Enter your email...'/>
            </div>
            <div className='_Frg_pas4'>
                <button>Forgot Password</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default page
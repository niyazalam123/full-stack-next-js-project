"use client";
import React from 'react';

const page = () => {
    return (
        <>
            <div className='_Frg_pas1'>
                <div className='_Frg_pas2'>
                    <h2>Reset your password</h2>
                    <div className='_Frg_pas3'>
                        <label htmlFor="_one1">Enter New Password</label>
                        <input type="password" placeholder='Enter your password...' />
                    </div>
                    <div className='_Frg_pas3'>
                        <label htmlFor="_one1">Enter confirm Password</label>
                        <input type="password" placeholder='Enter confirm password...' />
                    </div>
                    <div className='_Frg_pas4'>
                        <button>Reset Password</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
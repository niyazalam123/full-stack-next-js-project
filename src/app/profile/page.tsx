"use client";
import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  async function handleLogout() {
    try {
      await axios.get("/api/users/logout");
      toast.success('logout Successfully!!');
      router.push("/login")
    } catch (error: any) {
      toast.error("something went wrong", error.message);
    }
  };

  return (
    <>
      <div className='_btnLogout'>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>Welcoome! to profile page</h1>
      <Toaster />
    </>
  )
}

export default page
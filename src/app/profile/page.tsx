"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const page = () => {
  const [user, setUser] = useState<any>({});
  const [loader,setLoader] = useState(false);
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

  useEffect(() => {
    async function getUser() {
      try {
        setLoader(true);
        const resp = await axios.get("/api/me");
        setUser(resp.data.result);
      } catch (error: any) {
        toast.error("unable to fetch! try again", error.message);
      }
      finally{
        setLoader(false);
      }
    };
    getUser();
  },[])
  return (
    <>
      <div className='_btnLogout'>
        <span style={{ marginRight: "12px" }}>{loader?"fetching...":user.email?.split("@")[0]}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>Welcoome! to profile page</h1>
      <Toaster />
    </>
  )
}

export default page
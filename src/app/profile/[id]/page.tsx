import React from 'react'

const page = ({params}:any) => {
  return (
    <>
    <h1>welcome! to your profile page {params.id}</h1>
    </>
  )
}

export default page
import React from 'react'
import { Link } from 'react-router-dom'
const Admin = () => {
  return (
    
    <div className='h-screen w-full flex justify-center items-center ' >
           <Link className='bg-blue-500 text-white px-6 py-2 rounded-xl' to="http://127.0.0.1:8000/admin/" > LOGIN </Link>
     
        
    </div>
  )
}

export default Admin
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' mb-4 flex justify-between text-lg font-bold text-white my-2 rounded bg-blue-400  p-3 shadow-lg'>
      <Link to={'/'}>
        <div>
          Workout Buddy
        </div>
      </Link>
      <div className='me-[63px]'>
        Add new Workout
      </div>
    </div>
  )
}

export default Navbar

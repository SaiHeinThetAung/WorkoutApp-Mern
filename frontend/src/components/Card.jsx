import React from 'react'
import {MdAutoDelete} from 'react-icons/md'
import { Link, redirect } from 'react-router-dom'
const Card = (workout) => {
    const delHandler=async(e)=>{
        e.preventDefault()
        const res=await fetch(`http://localhost:4000/api/workout/${workout._id}`,{
            method:'DELETE'
        })
        if(res.ok){
            console.log('successfully deleted')
        }
    }
  return (
    <div className='bg-slate-100 p-3 flex justify-between mb-3 shadow-lg rounded-md w-[860px]'>
        <div className='w-[200px]'>
            <h2 className='font-semibold text-lg'>Name</h2>
            <h2 className='text-blue-500 font-semibold text-lg'>{workout.name}</h2>
        </div>
        <div>
            <h2 className='font-semibold text-lg'>Repeats</h2>
            <h2 className='text-blue-500 font-semibold text-lg'>{workout.reps}</h2>
        </div>
        <div>
            <h2 className='font-semibold text-lg'>Load(Kg)</h2>
            <h2 className='text-blue-500 font-semibold text-lg'>{workout.load}</h2>
        </div>
        <div>
            <p className='font-semibold text-lg'>Edit</p>
            <div className='pt-1'>
                <button onClick={delHandler} className='me-2 px-3 py-1 rounded-md bg-red-500 text-white'><MdAutoDelete/></button>
                
            </div>
        </div>

    </div>
  )
}

export default Card
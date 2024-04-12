import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import {MdAddCircleOutline} from 'react-icons/md'
const Home = () => {
  const [workouts,setWorkOuts]=useState([])
  const fetchWorkout=async()=>{
    const api=await fetch('http://localhost:4000/api/workout')
    
    const  data=await api.json()
    setWorkOuts(data)

  }
  useEffect(()=>{
    fetchWorkout()
    
  },[workouts])

  const [name,setName]=useState('')
  const [reps,setReps]=useState('')
  const [load,setLoad]=useState('')
  const [error,setError]=useState('')
  const submitHandler=async(e)=>{
    e.preventDefault()
    const obj={name,load,reps}
    const response=await fetch('http://localhost:4000/api/workout',{
      method:'POST',
      body:JSON.stringify(obj),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const json=await response.json()
    if(!response.ok){
      setError(json.error)
      console.log(error)
    }
    else{
      setName('')
      setLoad('')
      setReps('')
      console.log('new workout added to db')
      
    }
  }
  
  return (
    <div className=' flex justify-between'>
      <div>
          {workouts.map(workout=>{
          return(
            <Card key={workout.id} {...workout}/>
          )
        })}
      </div>
      <div>
        <form onSubmit={submitHandler} className=' text-center shadow-md rounded-3xl w-[300px] p-2 '>
           <div className='text-center'> 
              <input className='text-blue-500 font-semibold  shadow-lg mb-1 border-b-2 border-b-blue-500 outline-none' type="text" placeholder='Name' required onChange={(e)=>setName(e.target.value)} value={name} />
              <input className='p-2 shadow-lg mb-1 border-b-2 outline-none  border-b-blue-500' type="text" placeholder='Reps' required onChange={(e)=>setReps(e.target.value)} value={reps}/>
              <input className='p-2 shadow-lg mb-1  border-b-blue-500 border-b-2 outline-none' type="text" placeholder='Load' required onChange={(e)=>setLoad(e.target.value)} value={load} />
          
           </div>
           <button className='px-3 py-1 border bg-blue-400 text-white shadow-lg rounded-sm mt-3'><MdAddCircleOutline/></button>
        </form>
      </div>
    </div>
  )
}

export default Home

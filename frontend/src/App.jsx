import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='container mx-10 w-[1200px]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>

        </Routes>
      </div>  
  )
}

export default App
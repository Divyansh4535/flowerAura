import React from 'react'
import Navbar from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Pages/Home'
import Menubar from './Components/Header/Menubar'
import Details from './Components/Details/Details'

const App = () => {
  return (
    
    <div className='relative h-screen w-full '>
      <Navbar />
      <Menubar />
       <div  className='px-16 w-full' >
          {/* <Home /> */}
          <Details/>
        </div> 
        <Footer />
    </div>
  )
}

export default App
import React from 'react'
import Footer from './Footer'
import Searchbar from './Searchbar'


const Homee = () => {
const handleSearch = () => {

  
  };  
  return (
    <div className='row justify-content-center homee'>
        <h1>Get your Medicine for quick recovery</h1>
         {/* SEARCH BAR HERE */}
        <Searchbar onSearch={handleSearch} />

        <p></p>
        <Footer/>
        
     
       
    </div>
    
  )
}

export default Homee
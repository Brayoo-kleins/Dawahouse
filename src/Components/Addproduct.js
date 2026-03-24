
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Addproduct = () => {
  // declaring state variables
  const[product_name,setProductName] = useState('');
  const[product_description,setProductDescription]= useState('');
  const[product_cost,setProductcost]=useState('');
  const[product_photo,setProductphoto]=useState('');
  // status messages
  const[loading,setLoading]=useState("")
  const[error,setError]= useState("")
  const[success,setSuccess]= useState("")

  // function to add product
  const handleSubmit =async (e)=>{
    e.preventDefault();
    setLoading("please wait...")

    try {
      // retrieve product details
      const formData=new FormData();
      formData.append("product_name",product_name)
      formData.append("product_description",product_description)
      formData.append("product_cost",product_cost)
      formData.append("product_photo",product_photo)

      // posting data to base url(api)
      const response = await axios.post("https://ryanoryx.alwaysdata.net/api/add_product",formData)

      setLoading("")
      setSuccess(response.data.success)
      
    } catch (error) {
      setError(error.message)
      
    }
  
  }
  return (
    <div className='row justify-content-center'>
        <nav>
        <Link to="/" className='btn btn-dark'>GET ALL PRODUCT</Link>
      </nav>
      {error}
      {success}
      {loading}
        <div className='col-md-6 card shadow m-2 p-4 '>
            <h1>addproduct</h1>
             {/* form */}
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
           placeholder="product name"
            className='form-control'
            onChange={(e)=>setProductName(e.target.value)}
            required
            /><br/>

             <input 
             type="text"
             name="product description"
              placeholder="product description" 
              className='form-control'
              value={product_description}
              onChange={(e)=>setProductDescription(e.target.value)}
              required
              /><br/>

          <input 
          type="number" 
          placeholder="product cost"
          className='form-control'
          value={product_cost}
          onChange={(e)=>setProductcost(e.target.value)}
          required

           /><br/>

          <input 
          type="file" 
          placeholder="enter product photo"
           className='form-control'
           accept="image/*"
          onChange={(e)=>setProductphoto(e.target.files[0])}
          required

           /><br/>

          {/* button */}
          <input 
          type="submit" 
          value="Addproduct" 
          className='btn btn-primary'/>


        </form>
        </div>
    </div>
  )
}

export default Addproduct
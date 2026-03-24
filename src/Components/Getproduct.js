
import React, { useEffect, useState } from 'react'
import image from'../logo.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


  
const Getproduct = () => {
    // declaring state variables
  const[products,setProduct]= useState([])
  const[loading,setLoading]= useState("")
  const[error,setError]= useState("")
  // navigation
  const navigate= useNavigate()

  // image url
  const img_url ="https://ryanoryx.alwaysdata.net/static/images/"
  // function to retrieve products
  const getproducts = async()=>{
    setLoading("please wait as we retrieve products...")
    try {
      const response = await axios.get("https://ryanoryx.alwaysdata.net/api/get_products_details")
      setProduct(response.data)
      setLoading("")

      
    } catch (error) {
      setError(error.message)
      
    }

  }





  // using useEffect to automatically retrieve product from database
  useEffect(()=>{
    getproducts()

  },[]);

return (
    <div className='row'>
      <h3>Available products</h3>
      {loading}
      {error}
      {/* products card design */}
      {products.map((product)=>(
      <div className='col-md-3 justify-content-center mb-4'>
        <div className='card shadow mt-2 p-4'>
          <img src={img_url + product.product_photo}alt={product.product_photo}className='product_img'/>

          {/* product details */}
          <div className='card-body'>
            <h5 className='mt-2'>{product.product_name}</h5>
            <p className='textmuted'>{product.product_description}</p>
            <b className='text-warning'>{product.product_cost}</b><br/>

            <button className='btn btn-dark mt-2 w-100' onClick={()=>navigate("/makepayment",{state:{product}})}>purcahase now</button>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Getproduct
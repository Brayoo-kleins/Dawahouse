import React, {  useState } from 'react'
// import image from'../logo.svg'
import {  useLocation } from 'react-router-dom'
import axios from 'axios';
const Mpesapayment = () => {

  // declaring state variables
  const {product}= useLocation().state || {};
  const[phone,setPhone]=useState("")
  const[messages,setMessages] = useState("")
  const[error,setError]=useState("")



  // image url
  const img_url ="https://ryanoryx.alwaysdata.net/static/images/"

  // function for mpesa payment
  const handlesubmit = async(e)=>{
    e.preventDefault()
    setMessages("please wait as we process the transaction")

    try {
      // retrieving user and product details for submission
      const formData = new FormData()
      formData.append("phone",phone)
      formData.append("amount",phone.product_cost)

      // adding base url for mpesa payment request
      const response =await axios.post("https://ryanoryx.alwaysdata.net/api/mpesa_payment",formData)
      setMessages(response.data.message)

      
    } catch (error) {
      setError(error.messages)
      
    }
  }



  return (
    <div className='row justify-content-center mt-2'>
      <h3>LIPA NA MPESA</h3>
      {messages}
      {error}

      {/* makepayment body */}
      <div className='col-md-6 card shadow m-2 p-4 card-margin mb-4'>
        <img src={img_url + product.product_photo} alt={product.product_photo} />
        <p>product Name:{product.product_name}</p>
        <p className='text-warning'>{product.product_cost}</p>
         {/* phone number form */}
        <form onSubmit={handlesubmit}>

          <label className='mt-3'>
            Phone Number
          </label>

          <input
            type="tel"
            placeholder='2547XXXXXXXX'
            className='form-control'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          {/* submit button */}
          <button
            type='submit'
            className='btn btn-dark mt-3 w-100'>
          
          </button>

          <button className='btn btn-dark'>Make payment</button>


        </form>

      </div>
    </div>
  )
}

export default Mpesapayment
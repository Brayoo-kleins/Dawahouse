
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
    // declaring state variables
  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[phone,setPhone] = useState("")
  const[password,setPassword] = useState("")

  // status messages
  const[loading,setloading] = useState("")
  const[error,seterror] = useState("")
  const[success,setSuccess] = useState("")
  // function to signup
  const submitSignupDetails =async(e)=>{
    e.preventDefault()
    setloading("please wait...")
    try {
      const formData =new FormData();
      formData.append("username",username);
      formData.append("email",email);
      formData.append("phone",phone);
      formData.append("password",password);

      // adding base url
        const response = await axios.post("https://ryanoryx.alwaysdata.net/api/signup",formData);

        setSuccess(response.data.success)
        setloading("")

      // reset values
        setPhone("")
        setUsername("")
        setPassword("")
        setEmail("")
      
    } catch (error) {
      seterror(error.message)
      
    }
  }
  return (
    <div className='row justify-content-center' id='image'>
        <div className='col-md-6 card shadow m-2 p-4 '>
            <h1>Signup</h1>
        {/* binding variables */}
        {loading}<br/>
        {error}<br/>
        {success}<br/>


        {/* Signup form*/}
        <form onSubmit={submitSignupDetails}>
          <input type='text' placeholder='Enter username' className='form-control'onChange={(e)=>setUsername(e.target.value)}/><br/>
          <input type='email' placeholder='Enter email' className='form-control'onChange={(e)=>setEmail(e.target.value)}/><br/>
          <input type='tel' placeholder='phone number' className='form-control'onChange={(e)=>setPhone(e.target.value)}/><br/>
          <input type='password' placeholder='Enter password' className='form-control'onChange={(e)=>setPassword(e.target.value)}/><br/>

          <input type='submit' value="Sign up" className='btn btn-primary w-100'/><br/>

          {/*{incase someone has an account}*/}
          <Link to='Signin'>Already have an account ? Signin</Link>
        </form>

        </div>
    </div>
  )
}

export default Signup
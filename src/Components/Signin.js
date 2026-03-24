
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Signin = () => {

  // declaring state variables
  const[email,setEmail]= useState("")
  const[password,setPassword]=useState("")
  // status messages
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("")

  // navigation
  const navigate = useNavigate()

  // function signin
  const handleSignin= async(e) =>{
    e.preventDefault()
    setLoading("please wait")

    try{
      // retrieving user details
      const formData=new FormData();
      formData.append("email",email)
      formData.append("password",password)

      // adding base url
      const response = await axios.post("https://ryanoryx.alwaysdata.net/api/signin",formData)
      if(response.data.user){
        setSuccess(response.data.message)
        setLoading("")
        localStorage.setItem("user",JSON.stringify(response.data.user))
        navigate("/")
      }else{
        setError(response.data.message)
        setLoading("")
      }
    } catch (error){
      setError(error.message)

    }

}
  
  return (
    <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2 p-4'>
        <h1>Signin</h1>
         {/* bind */} 
        {loading}<br/>
        {error}<br/>
        {success}

        <form action=""onSubmit={handleSignin}>
          <input type='email' placeholder='enter email' className='form-control'onChange={(e)=>setEmail(e.target.value)}/><br/>
          <input type='password' placeholder='enter password' className='form-control'onChange={(e)=>setPassword(e.target.value)}/><br/>
          <input type="submit" className='btn btn-primary w-50' value="login" /><br/>

          <Link to='/signup'>Dont have an account?Signup</Link>
          </form>
      </div>
    </div>
  )
}

export default Signin
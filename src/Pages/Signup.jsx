import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import '../Styles/Signup.css'

function Signup() {
  const [firstName, setFirstName] = useState(' ');
  const [lastName, setLastName] = useState(' ');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const navigate=useNavigate()

  const handleInputChange = (event) => {
      const {id , value} = event.target;
      if(id === "firstName"){
          setFirstName(value);
      }
      if(id === "lastName"){
          setLastName(value);
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
      if(id === "confirmPassword"){
          setConfirmPassword(value);
      }

  }

  const handleSubmit  = () => {
      console.log(firstName,lastName,email,password,confirmPassword);
  }

  return(
      <div className="form">
          <div className="form-body">
              <div >
                  <label className="form__label" >First Name </label>
                  <input className="form__input" type="text" value={firstName} onChange = {(event) => handleInputChange(event)} id="firstName" placeholder="First Name"/>
              </div>
              <div >
                  <label className="form__label" >Last Name </label>
                  <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(event) => handleInputChange(event)} placeholder="LastName"/>
              </div>
              <div >
                  <label className="form__label" >Email </label>
                  <input  type="email" id="email" className="form__input" value={email} onChange = {(event) => handleInputChange(event)} placeholder="Email"/>
              </div>
              <div >
                  <label className="form__label" >Password </label>
                  <input className="form__input" type="password"  id="password" value={password} onChange = {(event) => handleInputChange(event)} placeholder="Password"/>
              </div>
              <div >
                  <label className="form__label" >Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(event) => handleInputChange(event)} placeholder="Confirm Password"/>
              </div>
          </div>
          <div>
              <button onClick={()=>handleSubmit()} className="footer">Sign Up</button>
          </div>
          
    <p>Already an user please Login</p>
    <button onClick={()=>navigate('/login')} className='log'>Login</button>
      </div>
     
  )
}

export default Signup
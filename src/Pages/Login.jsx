import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'

function Login() {
  const navi=useNavigate()
const handleSumbit=(event)=>
{
event.preventDefault()
}
  return (
    <div className='form'>
    <div className='form-body'>
      <form action={handleSumbit}>
      <div >
                  <label className="form__label" >Enter your Email</label>
                  <input className="form__input" type="email"  placeholder="Enter your email" required/>
              </div>
              <div >
                  <label className="form__label" >PassWord </label>
                  <input className="form__input" type="PassWord" placeholder="Password" required/>
              </div>
        <div >
        <input type="submit" value='Login' className='button' onClick={()=>navi('/')}></input>
        </div>
      </form>

    </div>
  </div>
  )
}

export default Login
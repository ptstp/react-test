import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
//import './App.css'

export const Login = () => {
  const auth = useContext(AuthContext) 
  const [login, setLogin] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const loginChangeHandler = (event: any) => {
  setLogin(event.target.value)  
  }
  const passwordChangeHandler = (event: any) => {
  setPass(event.target.value)
  console.log(pass)
  }

  const clickHandler = () => {
    if (login !== 'admin' || pass !== '12345' ){
      alert('FALL!!FUCKYOU!TRYAGAIN!!')
      return

    } 
  auth.login(login, pass)
  }
  if (auth.isAuth == true) {
    return (
      <div>
        <h1>authorised</h1>
      </div>
    )
  }
  return (
    <div className="container">
      <h1>Login!</h1>
      <input type = "input" onChange = {loginChangeHandler} />
      <input type = "input" onChange = {passwordChangeHandler} />
      <button onClick = {clickHandler} >Click</button>
    </div>
  )
}

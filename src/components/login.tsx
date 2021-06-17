import React, { useState, useContext, useCallback } from 'react'
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

  const sendUsers = useCallback(async (_login, _password) => {
    const user = {
      login: _login,
      password: _password
    }
    const jsonUser = JSON.stringify(user)
    const request = await fetch('http://185.206.212.246:1234/api/auth/auth/', {method: 'POST', body: jsonUser, headers: {"Accept": "application/json", "Content-Type" : "application/json"} })
    const data = await request.json()
  }, [])
  const clickHandler = () => {
    sendUsers(login, pass)
    if (login !== 'admin' || pass !== '12345') {
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
      <input type="input" onChange={loginChangeHandler} />
      <input type="input" onChange={passwordChangeHandler} />
      <button onClick={clickHandler} >Click</button>
    </div>
  )
}

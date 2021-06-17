import React, { useState, useCallback, useEffect } from 'react'
import { New } from './new';

//import './App.css'
interface IUser {
  id: number,
  login: string,
  password: string
}

export const News = () => {
  const [news, setNews] = useState<Array<IUser>>([])
  const [loading, setLoading] = useState<boolean>(true)
  const populateUsers = useCallback(async () => {
    const request = await fetch('http://185.206.212.246:1234/api/auth/auth/all')
    if (request.ok === true) {
      const data = await request.json()
      const users = data.data;
      setNews(users)
      setLoading(false)

    }
  }, [])
  useEffect(() => {
    populateUsers()
  }, [])
  if (loading === true) {
    return (
      <div>
        LOADING
      </div>
    )
  }
  return (
    <div className="container">
      <h1>News</h1>
      {news.map((u: IUser) => 
        <New id={u.id} login={u.login} password={u.password}/>
      )}
    </div>
  )
}
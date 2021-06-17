import React, { useState, createContext, useCallback, useEffect } from 'react';


let storageName = 'userData';

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const logout = useCallback(() => {
        localStorage.removeItem(storageName);
        setIsAuth(false);
        setUsername('');
        setPassword('');
    }, [])
    const login = useCallback((_name, _pass) => {
        
        setIsAuth(true);
        setUsername(_name);
        setPassword(_pass);
        localStorage.setItem(storageName, JSON.stringify({isAuth: true, username: _name, password: _pass})) 
        
    }, [])
    useEffect(() => {
        if(localStorage.getItem(storageName) != null)
        {
            const data = JSON.parse(localStorage.getItem(storageName) || JSON.stringify({}) )
            if (data !== {} )
            {
                setIsAuth(data.isAuth)
                setUsername(data.username)
                setPassword(data.password)
                
            }
        }
    }, []); 

    return {isAuth, login, logout, password, username}
}

function foo(_name: string, _pass: string){}
export const AuthContext = createContext({
    isAuth: false,
    username: "",
    password: "",
    login: foo,
    logout: () => {}
});
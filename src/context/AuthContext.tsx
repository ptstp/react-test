import React, { useState, createContext, useCallback } from 'react';


export const useAuth = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const login = useCallback((_name, _pass) => {
        setIsAuth(true);
        setUsername(_name);
        setPassword(_pass);
    }, [])
    return {isAuth, login, password, username}
}

function foo(_name: string, _pass: string){}
export const AuthContext = createContext({
    isAuth: false,
    username: "",
    password: "",
    login: foo
});
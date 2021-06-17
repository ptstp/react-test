import React, { useState, createContext, useCallback, useEffect } from 'react';
import './new.css'

interface INewProps{
    id: number,
    login: string,
    password: string
}

export const New = (props: INewProps) => {
    return (
        <div className="user">
            <p>{props.id}</p>
            <p>{props.login}</p>
            <p>{props.password}</p>
        </div>
    )
}
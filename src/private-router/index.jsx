import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

export default function index() {
    let token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : "";
    
    if(token){
        return (
            <Outlet></Outlet>
        )
    }
    else{
        return (
            <Navigate to="/login"></Navigate>
        )
    }
}

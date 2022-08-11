import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate();

    let logout = () => {
        window.localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={logout}>Logout</button>
            <button onClick={() => navigate("/about")}>About</button>
        </div>
    )
}

import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let signin = async (e) => {
        e.preventDefault();
        let newData = {
            email,
            password
        }
        try {
            let rawData = await window.fetch("https://my-udemy-api.herokuapp.com/api/v1/user/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newData)
            });
            let data = await rawData.json();
            if(data.message !== "success"){
                throw new Error("login failed");
            }
            window.localStorage.setItem("token", data.token);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={signin}>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <button>Login</button>
            <button onClick={() => navigate("/register")}>Dont have account?</button>
        </form>
    )
}

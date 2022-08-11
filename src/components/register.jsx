import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Register() {
    let navigate = useNavigate();
    let [nama, setNama] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let url = "https://my-udemy-api.herokuapp.com/api/v1/user";
    let regis = async (e) => {
        e.preventDefault();
        let newData = {
            name: nama,
            email,
            password
        }
        try {
            let rawData = await window.fetch(`${url}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newData)
            })
            let data = await rawData.json();
            window.localStorage.setItem("token", data.token);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={regis}>
            <input type="text" placeholder='Name' onChange={(e) => setNama(e.target.value)}/>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <button>Register</button>
            <button onClick={() => navigate("/login")}>Already have Account?</button>
        </form>
    )
}

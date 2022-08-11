import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function About() {
    let navigate = useNavigate();
    let [list, setList] = useState([]);
    let token = window.localStorage.getItem("token");

    let getAllData = async () => {
        try {
            let rawData = await window.fetch(`https://my-udemy-api.herokuapp.com/api/v1/todo`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            });
            let data = await rawData.json();
            setList(data.todos);
        } catch (error) {
            console.log(error);
        }
    }

    let addData = async () => {
        try {
            let rawData = await window.fetch("https://my-udemy-api.herokuapp.com/api/v1/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization":token,
                },
                body: JSON.stringify({
                    "title": "disign new android app"
                })
            })
            let data = await rawData.json();
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllData();
        addData();
    }, []);

    let deleteList = async (idx) => {
        let getId = list[idx]._id;
        try {
            let rawData = await window.fetch(`https://my-udemy-api.herokuapp.com/api/v1/todo/${getId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            });
            await rawData.json();
            getAllData();
        } catch (error) {
            console.log(error);
        }
    }

    let editList = async (idx) => {
        let getId = list[idx]._id;
        try {
            let rawData = await window.fetch(`https://my-udemy-api.herokuapp.com/api/v1/todo/${getId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                },
                body: JSON.stringify({
                    "title": list[idx].title + " edited"
                })
            });
            await rawData.json();
            getAllData();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>About</h1>
            <button onClick={() => navigate("/")}>Home</button>
            <ul>
                {list.map((item, idx) => {
                    return (
                        <li key={idx}>{item.title} <button onClick={() => deleteList(idx)}>delete</button><button onClick={() => editList(idx)}>edit</button></li>
                    )
                })}
            </ul>
        </div>
    )
}

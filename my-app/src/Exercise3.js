import React,{useState,useEffect} from 'react';

const Exercise3 = () => {
        const [user,setUser] = useState([]);
        useEffect (()=> {
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(json =>setUser(json.slice(0,5)));
        })
       return ( 
        <>
                <h1>Exercise 3:</h1>
                <ul>{user.map(User=>(
                        <li key={User.id}>
                                <h2>Title: {User.title}</h2>
                                <h3>Body : {User.body}</h3>
                                <h3>Author : {User.userId}</h3>
                        </li>
                ))} </ul>
        </>);
}

export default Exercise3;
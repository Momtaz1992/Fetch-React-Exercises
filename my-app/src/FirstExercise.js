import React, { useState, useEffect } from 'react';

const FirstExercise = () => {
       const [data, setData] = useState([]);
       useEffect(()=> {
              fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(json => setData(json));
       },[]);
       return (
              <div className="firstExercise">
                     <h1>First Exercise</h1>
                     <h2>List of Users:</h2>
                     <ul>
                            {data.map(user => (<li key={user.id}>{user.name}</li>))}
                     </ul>
              </div>
       );
}
 
export default FirstExercise;


/* Exercise 1:
Create a simple React component that uses the fetch() method to 
retrieve data from an API endpoint and display the results
on the page. The API endpoint 
can be any REST API that returns JSON data. Once the data is retrieved, you should 
display it in a list format, with each item in
 the list representing a single record from the API response. */
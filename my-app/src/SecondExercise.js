import React, { useState, useEffect } from 'react';

const SecondExercise = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className="secondExercise">
      <h1>Second Exercise</h1>
      <ul>
        {data.map(customer => (
          <li key={customer.id}>
            <p>Name: {customer.name}</p>
            <p>Username : {customer.username}</p>
            <p>Email : {customer.email}</p>
            <p>Phone : {customer.phone}</p>
            <p>Address : {customer.address.street}, {customer.address.city}, {customer.address.zipcode}</p>
            <p>Status : {customer.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondExercise;

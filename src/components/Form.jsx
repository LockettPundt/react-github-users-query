import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
  const [userName, setUserName ] = useState('');
  
  
  const handleSubmit = e => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${userName}`)
      .then((response) => {
        props.onSubmit(response.data);
        setUserName('');
      });
  }
  
  const handleChange = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userName} placeholder="Enter a User Name" onChange={handleChange} required></input>
      <button type="submit">Add User Card</button>
    </form>
  )
  
  
}

export default Form;
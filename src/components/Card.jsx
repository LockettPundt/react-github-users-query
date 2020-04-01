import React, { useState } from 'react';

const Card = props => {
  const { blog, name, avatar_url, location} = props;
  
  return (
  <div>
    <div >
      <img alt="avatar"src={avatar_url} />
      <div className="userInfo">
        <p>{name}</p>
        <p><a href={blog}>{blog}</a></p>
        <p>{location}</p>
      </div>
  </div>
  </div>
  );
};

export default Card;
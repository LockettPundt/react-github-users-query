import React, { useState } from 'react';

const Card = props => {
  console.log(props);
  const { blog, name, avatar_url, location, login} = props;
  const profileLink = `/user/${login}`;
  
  return (
  <div>
    <div >
      <img alt="avatar"src={avatar_url} />
      <div className="userInfo">
        <a href={profileLink}>{name}</a>
        <p><a href={blog}>{blog}</a></p>
        <p>{location}</p>
      </div>
    </div>
  </div>
  );
};

export default Card;
import React from 'react';


const Repos = (props) => {
  const { repos } = props;
  console.log(props);
  const repoList = repos.map( item => { return (<p>{item.name}</p>) });
  
  return (
    <div>{repoList}</div>
  )
}

export default Repos;
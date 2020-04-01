import React, { useState, useEffect} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Repos from './Repos';

const User = (props) => {
  
  const [ userInfo, setUserInfo ] = useState([]);
  const [ repos, setRepos ] = useState('');
  
  
  useEffect(() => {
    const { userName } = props.match.params;
    const fetchUser = async () => {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      setUserInfo(response.data);
    };
    
    const fetchRepos = async () => {
      const response = await axios.get(`https://api.github.com/users/${userName}/repos`);
      setRepos(response.data);
    };
    
    
    fetchUser();
    fetchRepos();
    
  }, [props.match.params]);
  
  
  console.log(userInfo);
  console.log(repos);
  const repoLink = `./${userInfo.login}/repos`;
  
  return (
    <Router>
      <Route path='/'>
        <>
          <img src={userInfo.avatar_url} alt="user profile pic"/>
          <h1>{userInfo.login}</h1>
          <a href={repoLink}>Repositories</a>
        </>
      </Route>
      <Route path={repoLink} render={ (repos) => <Repos {...repos} /> } />
    </Router>
    
  );
  
}


export default User;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGithubApi from '../../services/github-api';

const UserView = () => {
  const [user, setUser] = useState([]);
  const params = useParams();
  const { loading, error, fetchUserInfo } = useGithubApi();
  // Fetching data from the github API
  const getUserData = async () => {
    const result = await fetchUserInfo(params.username);
    setUser(result);
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return <p>LOADING...</p>;
  }
  if (error) {
    return (
      <div>
        <p>Theres was an error {error.message}</p>
        <button onClick={getUserData}>Retry</button>
      </div>
    );
  }
  return  (<div>
    <div>
      <div>{`${params.username}'s general info`}</div>
      <div>{`Name: ${user.name}`}</div>
      <div>{`Email: ${user.email}`}</div>
      <div>{`Bio: ${user.bio}`}</div>
      <div>{`Blog: ${user.blog}`}</div>
    </div>
    <div>
      <div>{`${params.username}'s repo info`}</div>
      <div>{`Public Repos: ${user.public_repos}`}</div>
      <div>{`Followers: ${user.followers}`}</div>
      <div>{`Following: ${user.following}`}</div>
    </div>
    {console.log(user)}
  </div>)
};

export default UserView;

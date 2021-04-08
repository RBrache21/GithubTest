import React, { useEffect, useState } from 'react';

import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router';
import useGithubApi from '../../services/github-api';

const UserView = () => {
  const [user, setUser] = useState([]);
  const params = useParams();
  const { loading, error, fetchUsers, fetchUserInfo } = useGithubApi();
  // Fetching data from the github API
  const getUserData = async () => {
    const result = await fetchUserInfo();
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
  return  <div>
  {params.username}
  <div>{`RBrache21 Followers: ${user.followers}`}</div>
  <div>{`RBrache21 Following: ${user.following}`}</div>
  <div>{`RBrache21 Public Repos: ${user.public_repos}`}</div>
  {console.log(user)}
  </div>
};

export default UserView;

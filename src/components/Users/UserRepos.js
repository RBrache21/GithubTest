import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGithubApi from '../../services/github-api';

const UserRepos = () => {
  const [repos, setRepos] = useState([]);
  const params = useParams();
  const { loading, error, fetchUserRepos } = useGithubApi();
  // Fetching data from the github API
  const getUserData = async () => {
    const result = await fetchUserRepos(params.username);
    setRepos(result);
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
  return  <div>{repos.map((repo, i) =>(
    <div>{repo.full_name}</div>
  ))}</div>
};

export default UserRepos;

import { Octokit } from '@octokit/rest';
import { useState } from 'react';

const octokit = new Octokit({
  userAgent: 'gitproject v1.2.3',
  baseUrl: 'https://api.github.com',
});

const useGithubApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // This service fetches the list of github users. The limit parameter is used to specify the # of users to fetch when the function is called
  const fetchUsers = async (limit) => {
    try {
      setLoading(true);
      setError(null);
      const { data: users } = await octokit.rest.users.list({
        per_page: limit
      });
      return users;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // This service fetches the information of a specified user.
  // takes a username parameter that is used to fetch the information of that username
  const fetchUserInfo = async (username) => {
    try {
      setLoading(true);
      setError(null);
      const { data: userInfo } = await octokit.rest.users.getByUsername({
        username: username
      }); 
      return userInfo;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  // This service fetches the public repositories of a specified user
  const fetchUserRepos = async (username) => {
    try {
      setLoading(true);
      setError(null);
      const { data: userInfo } = await octokit.rest.repos.listForUser({
        username: username,
        per_page: 100
      }); 
      return userInfo;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    fetchUsers,
    fetchUserInfo,
    fetchUserRepos
  };
};

export default useGithubApi;

import { Octokit } from '@octokit/rest';
import { useState } from 'react';

const octokit = new Octokit({
  userAgent: 'gitproject v1.2.3',
  baseUrl: 'https://api.github.com',
});

const useGithubApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // This service fetches the list of github users 
  const fetchUsers = async (limit, offset) => {
    try {
      setLoading(true);
      setError(null);
      const { data: users } = await octokit.rest.users.list();
      return users;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // This service fetches the information of a specified user
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
        per_page: 50
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

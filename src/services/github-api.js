import { Octokit } from '@octokit/rest';
import { useState } from 'react';

const octokit = new Octokit({
  userAgent: 'gitproject v1.2.3',
  baseUrl: 'https://api.github.com',
});

const useGithubApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return {
    loading,
    error,
    fetchUsers,
  };
};

export default useGithubApi;

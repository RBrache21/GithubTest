import React, { useEffect, useState } from 'react';

import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router';
import useGithubApi from '../../services/github-api';

const UserView = () => {
  const [users, setUsers] = useState([]);
  const params = useParams();
  const { loading, error, fetchUsers } = useGithubApi();
  // Fetching data from the github API
  const getTableData = async () => {
    const result = await fetchUsers();
    setUsers(result);
  };

  useEffect(() => {
    getTableData();
  }, []);

  if (loading) {
    return <p>LOADING...</p>;
  }
  if (error) {
    return (
      <div>
        <p>Theres was an error {error.message}</p>
        <button onClick={getTableData}>Retry</button>
      </div>
    );
  }
  return <div>{params.username}</div>;
};

export default UserView;

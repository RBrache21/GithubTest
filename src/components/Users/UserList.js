import React, { useEffect, useState } from 'react';

import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import useGithubApi from '../../services/github-api';

const UserList = () => {
  const [users, setUsers] = useState([]);
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
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Avatar</th>
            <th>Username</th>
            <th>Detail View</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>
                <Image
                  alt="avatar"
                  src={`${user.avatar_url}`}
                  height="100px"
                  roundedCircle
                />
              </td>
              <td>{user.login}</td>
              <td>{<Link to={`/users/${user.login}?per_page(100)`}>View</Link>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;

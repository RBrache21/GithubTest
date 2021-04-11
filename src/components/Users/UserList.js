import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import useGithubApi from '../../services/github-api';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TablePagination } from '@material-ui/core';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const { loading, error, fetchUsers } = useGithubApi();
  // states used for filtering
  const pages = [25, 50, 100]
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])

 
  // Fetching data from the github API. The Fetch Users takes the number of users per page to display
  const getTableData = async () => {
    const result = await fetchUsers(100);
    setUsers(result);
  };

  useEffect(() => {
    getTableData();
  }, []);
  // placeholder for when loading and error handling
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
 // this functions handle the pagination of the app
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  // This function is used to filter the users list
  const usersSlicing = () => {
    return users.slice(page*rowsPerPage, (page+1)*rowsPerPage)
  }

  return (
    <div>
      <TablePagination 
        rowsPerPageOptions={pages} 
        component="div" 
        count={users.length} 
        rowsPerPage={rowsPerPage} 
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <TableContainer >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="center">Github Id</TableCell>
              <TableCell align="center">Avatar</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Detail View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersSlicing().map((user, i) => (
              <TableRow>
                <TableCell align='center'>{user.id}</TableCell>
                <TableCell align="center"><Image alt="avatar" src={`${user.avatar_url}`} height="50px" roundedCircle/></TableCell>
                <TableCell align="center">{user.login}</TableCell>
                <TableCell align="center">{<Link to={`/users/${user.login}`}>View</Link>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;


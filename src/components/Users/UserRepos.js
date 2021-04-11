import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGithubApi from '../../services/github-api';
import Modal from 'react-modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


// Modal Styles
const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const UserRepos = () => {
  const [repos, setRepos] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const params = useParams();
  const { loading, error, fetchUserRepos } = useGithubApi();
  // Fetching data from the github API
  const getUserData = async () => {
    const result = await fetchUserRepos(params.username);
    setRepos(result);
  };

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    getUserData();
  }, []);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e9eef1',
    },
    secondary: {
      main: '#00b7ba',
    },
  },
});

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
  return  (
    <div>
      <TableContainer >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">Repo Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.map((repo, i) => (
              <TableRow>
                <TableCell align='center'>{i+1}</TableCell>
                <TableCell align="center" style={{cursor: 'pointer'}} key={i} onClick={openModal}>{repo.full_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal isOpen={modalIsOpen} style={modalStyles}>
        <ThemeProvider theme={theme}>
          <div>This Modal is supposed to display the repo information</div>
          <div style={{'text-align': 'center'}}>
            <Button variant='contained' color='secondary' style={{color: '#e9eef1'}} onClick={closeModal}>Close Modal</Button>
            <Button variant='contained' color='secondary' style={{color: '#e9eef1'}}>Go to Repo</Button>
          </div>
        </ThemeProvider>
      </Modal>
      {console.log(repos)}
    </div>
  )
  
};

export default UserRepos;

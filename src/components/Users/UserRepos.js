import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGithubApi from '../../services/github-api';
import Modal from 'react-modal';


//Modal Styles
const customStyles = {
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
  const [modalIsOpen,setIsOpen] = useState(false);
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
    {repos.map((repo, i) =>(
      <p style={{cursor: 'pointer'}} key={i} onClick={openModal}>{repo.full_name}</p>
       ))}
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div>I am a modal</div>
        <button onClick={closeModal}>Close Modal</button>
        <button>Go to Repo</button>
      </Modal>
      {console.log(repos)}
    </div>
  )
  
};

export default UserRepos;

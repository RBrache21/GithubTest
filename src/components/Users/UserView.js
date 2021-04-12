/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserViewContainer } from './UserView.styles'
import { useParams } from 'react-router';
import useGithubApi from '../../services/github-api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
    width: '400px',
    height: '350px'
  },
});

const UserView = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const params = useParams();
  const { loading, error, fetchUserInfo } = useGithubApi();
  // Fetching data from the github API
  const getUserData = async () => {
    const result = await fetchUserInfo(params.username);
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
  return <UserViewContainer>
    <Card className={classes.root} style={{margin: '50px'}}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt="User Avatar"
          height="160"
          image={`${user.avatar_url}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${params.username}'s general info`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div>{`Name: ${user.name}`}</div>
            <div>{`Email: ${user.email}`}</div>
            <div>{`Bio: ${user.bio}`}</div>
            <div>{`Blog: ${user.blog}`}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.root} style={{margin: '50px'}}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt="Github image"
          height="140"
          image={`data:image/jpeg;base64,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`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${params.username}'s repo info`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div >{`Public Repos: ${user.public_repos}`}</div>
            <div>{`Followers: ${user.followers}`}</div>
            <div>{`Following: ${user.following}`}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/users/${user.login}/repos`}><Button size="small" color="primary">Repos</Button></Link>
        <Button size="small" color="primary">Following</Button>
        <Button size="small" color="primary">Followers</Button>
      </CardActions>
    </Card>
  </UserViewContainer>
};

export default UserView;


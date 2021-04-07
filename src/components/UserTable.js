import React, { useEffect, useState } from 'react';
import axios from "axios";
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

const UserTable = () => {

	const [users, setusers] = useState([]);
	// Fetching data from the github API
	useEffect(() =>{
		axios.get('https://api.github.com/users?&per_page=100')
		.then(res => {
			console.log(res.data)
			setusers(res.data)
		})
	}, [])

	return (
		<div >
      		<Table striped bordered hover>
      			<thead>
      				<tr>
      					<th>Id</th>
      					<th>Avatar</th>
      					<th>Username</th>
      				</tr>
      			</thead>
      			<tbody>
      				{
	      				users.map((user, i) => (
	      					<tr key={i}>
	      						<td>{user.id}</td>
	      						<td><Image alt='avatar' src={`${user.avatar_url}`} height='100px'roundedCircle/></td>
	      						<td>{user.login}</td>
	      					</tr>
	      				))
      				}
      			</tbody>
      		</Table>
		</div>
	);
}

export default UserTable;



import React, { useEffect, useState } from 'react';
import axios from "axios";
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
	auth: "",
	userAgent: 'gitproject v1.2.3',
	baseUrl: 'https://api.github.com'
})

const UserTable = () => {

	const [users, setUsers] = useState([]);
	// Fetching data from the github API
	useEffect(() =>{
		// axios.get('https://api.github.com/users?&per_page=100')
		octokit.rest.users.list()
		.then(res => {
			console.log(res.data)
			setUsers(res.data)
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



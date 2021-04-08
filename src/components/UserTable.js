import React, { useEffect, useState } from 'react';
import axios from "axios";
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
	auth: "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",
	userAgent: 'gitproject v1.2.3',
	baseUrl: 'https://api.github.com'
})

const UserTable = () => {
	const [users, setusers] = useState([]);
	// Fetching data from the github API
	useEffect(() =>{
		octokit.rest.users.list()
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



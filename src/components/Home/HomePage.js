import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div>
			<h1>HOME PAGE</h1>
			<button><Link to='/users'>Github Users</Link></button>
		</div>
	);
}

export default HomePage;
import React from 'react';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
	auth: "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",
	userAgent: 'gitproject v1.2.3',
	baseUrl: 'https://api.github.com'
})

// console.log(octokit.rest.users.list())

const HomePage = () => {
	return (
		<div>
			<h1>HOME PAGE</h1>
		</div>
	);
}

export default HomePage;
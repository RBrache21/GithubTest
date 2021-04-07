import React from 'react';

const SearchBar = ({searchbar, searchChange}) => {
	return (
		<div>
			<input type='search' placeholder='search user' onChange={searchChange}/>
		</div>
	);
}

export default SearchBar;
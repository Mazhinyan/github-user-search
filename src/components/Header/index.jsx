import React from 'react';
import SearchForm from '../SearchForm';
import DropDownLang from '../DropDownLanguage';

const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-dark bg-primary">
				<SearchForm />
				<DropDownLang />
			</nav>
		</header>
	);
};

export default Header;

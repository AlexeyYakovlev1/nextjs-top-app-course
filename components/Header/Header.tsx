import React from 'react';
import classes from "./Header.module.sass";
import { IHeaderProps } from "./Header.props";

const Header = ({ ...props }:IHeaderProps) => {
	return (
		<header {...props}>header</header>
	);
};

export default Header;
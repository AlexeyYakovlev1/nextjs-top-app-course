import React from 'react';
import Menu from "../Menu/Menu";
import classes from "./Sidebar.module.sass";
import { ISidebarProps } from "./Sidebar.props";

const Sidebar = ({ ...props }:ISidebarProps) => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};

export default Sidebar;
import React from 'react';
import Menu from "../Menu/Menu";
import classes from "./Sidebar.module.sass";
import { ISidebarProps } from "./Sidebar.props";
import LogoIcon from "../layout/LogoIcon";
import cn from "classnames";

const Sidebar = ({ className, ...props }:ISidebarProps) => {
	return (
		<div className={cn(className, classes.sidebar)} {...props}>
			<LogoIcon className={classes.logo} />
			<div>Search</div>
			<Menu />
		</div>
	);
};

export default Sidebar;
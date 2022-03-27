import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { ILayoutProps } from "./Layout.props";
import classes from "./Layout.module.sass";

const Layout = ({ children }:ILayoutProps) => {
	return (
		<div className={classes.wrapper}>
			<Header className={classes.header} />
			<Sidebar className={classes.sidebar} />
			<div className={classes.body}>
				{children}
			</div>
			<Footer className={classes.footer} />
		</div>
	);
};

export default Layout;
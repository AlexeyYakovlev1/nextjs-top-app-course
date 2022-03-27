import Link from "next/link";
import React from 'react';
import classes from "./Footer.module.sass";
import { IFooterProps } from "./Footer.props";
import cn from "classnames";
import { format } from "date-fns";

const Footer = ({ className, ...props }:IFooterProps) => {
	return (
		<footer className={cn(className, classes.footer)} {...props}>
			<p>
				OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
			</p>
			<Link href={`/`}>
				<a target="_blank">Пользовательское соглашение</a>
			</Link>
			<Link href={`/`}>
				<a target="_blank">Политика конфиденциальности</a>
			</Link>
		</footer>
	);
};

export default Footer;
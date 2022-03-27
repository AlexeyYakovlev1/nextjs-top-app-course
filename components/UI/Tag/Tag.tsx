import React from 'react';
import { ITagProps } from "./Tag.props";
import classes from "./Tag.module.sass";
import cn from "classnames";
import Link from "next/link";

const Tag = ({ size="small", children, color="ghost", href, className, ...props }:ITagProps) => {
	return (
		<div
			className={cn(classes.tag, className, {
				[classes.middle]: size === "middle",
				[classes.small]: size === "small",
				[classes.ghost]: color === "ghost",
				[classes.red]: color === "red",
				[classes.gray]: color === "gray",
				[classes.green]: color === "green",
				[classes.primary]: color === "primary",
			})}
			{...props}
		>
			{href ? <Link href={href}><a>{children}</a></Link> : <>children</>}
		</div>
	);
};

export default Tag;
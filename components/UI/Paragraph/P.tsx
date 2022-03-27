import classes from './P.module.sass';
import { IPProps } from "./P.props";
import cn from "classnames";

const P = ({ size="middle", children, className, ...props }:IPProps) => {
	return (
		<p
			className={cn(classes.text, className, {
				[classes.small]: size === "small",
				[classes.middle]: size === "middle",
				[classes.big]: size === "big",
			})}
			{...props}
		>
			{children}
		</p>
	);
};

export default P;
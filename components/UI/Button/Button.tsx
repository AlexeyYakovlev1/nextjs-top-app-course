import classes from "./Button.module.sass";
import { IButtonProps } from "./Button.props";
import cn from "classnames";
import ArrowIcon from "./Arrow";

const Button = ({ children, arrow="none", appearance="primary", className, ...props }: IButtonProps) => {
	return (
		<button
			className={cn(classes.button, className, {
				[classes.primary]: appearance === "primary",
				[classes.ghost]: appearance === "ghost"
			})}
			{...props}
		>
			{children}
			{arrow !== "none" && <span className={cn(classes.arrow, {
				[classes.arrow__down]: arrow === "down",
				[classes.arrow__right]: arrow === "right"
			})}>
				<ArrowIcon />
			</span>}
		</button>
	);
};

export default Button;
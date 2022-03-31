import classes from "./Card.module.sass";
import { ICardProps } from "./Card.props";
import cn from "classnames";

const Card = ({ color="white", children, className, ...props }:ICardProps): JSX.Element => {
	return (
		<div
			className={cn(classes.card, className, {
				[classes.blue]: color === "blue"
			})}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;
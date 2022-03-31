import classes from "./Advantage.module.sass";
import { IAdvantageProps } from "./Advantage.props";
import DoneIcon from "../DoneIcon";
import Htag from "../../UI/Htag/Htag";
import P from "../../UI/Paragraph/P";

const Advantage = ({ title, description }:IAdvantageProps) => {
	return (
		<li className={classes.advantage}>
			<div className={classes.done}>
				<DoneIcon />
				<span className={classes.doneBorder}></span>
			</div>
			<div>
				<Htag tag="h3">{title}</Htag>
				<P className={classes.description} size="big">{description}</P>
			</div>
		</li>
	);
};

export default Advantage;
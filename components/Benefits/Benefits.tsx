import { ITopPageAdvantage } from "../../interfaces/page.interface";
import Htag from "../UI/Htag/Htag";
import P from "../UI/Paragraph/P";
import Tag from "../UI/Tag/Tag";
import Advantage from "./Advantage/Advantage";
import classes from "./Benefits.module.sass";
import { IBenefitsProps } from "./Benefits.props";

const Benefits = ({ advantages, seoText, tags }:IBenefitsProps): JSX.Element => {
	return (
		<div className={classes.benefits}>
			<div className={classes.header}>
				<Htag tag="h2">Преимущества</Htag>
			</div>
			<ul className={classes.list}>
				{advantages.map((advantage:ITopPageAdvantage) => {
					return (
						<Advantage key={advantage._id} {...advantage} />
					);
				})}
			</ul>
			<P size="big">{seoText}</P>
			{tags ? <div className={classes.skills}>
				<Htag tag="h3">Получаемые навыки</Htag>
				{tags.map((tag, index) => {
					return <Tag key={index} color="primary" size="small">{tag}</Tag>;
				})}
			</div> : false}
		</div>
	);
};

export default Benefits;
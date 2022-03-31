import { TopLevelCategory } from "../../interfaces/page.interface";
import Benefits from "../Benefits/Benefits";
import HhData from "../Card/HhData/HhData";
import Htag from "../UI/Htag/Htag";
import Tag from "../UI/Tag/Tag";
import classes from "./TopPage.module.sass";
import { ITopPageComponentProps } from "./TopPage.props";

const TopPageComponent = ({ page, products, firstCategory }:ITopPageComponentProps): JSX.Element => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && <Tag size="middle" color="gray">{products.length}</Tag>}
				<span>Сортировка</span>
			</div>
			<div>
				{products.map(product => {
					return <div key={product._id}>{product.title}</div>;
				})}
			</div>
			<div className={classes.hhTitle}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				<Tag size="middle" color="red">hh.ru</Tag>
			</div>
			{firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
			{page.advantages.length ? <Benefits advantages={page.advantages} /> : false}
		</div>
	);
};

export default TopPageComponent;
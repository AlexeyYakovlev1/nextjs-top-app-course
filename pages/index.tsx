import React from "react";
import withLayout from "../components/layout/withLayout";
import Button from "../components/UI/Button/Button";
import Htag from "../components/UI/Htag/Htag";
import P from "../components/UI/Paragraph/P";
import Rating from "../components/UI/Rating/Rating";
import Tag from "../components/UI/Tag/Tag";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";
import { GetStaticProps } from "next";

const Home = ({ menu }:IHomeProps) => {
	const [rating, setRating] = React.useState<number>(2);
	
	return (
		<>
			<Htag tag="h1">Title</Htag>
			<Button appearance="primary" arrow="right">Click</Button>
			<Button appearance="ghost" arrow="down">Click</Button>
			<P size="small">Small</P>
			<P size="middle">Middle</P>
			<P size="big">Big</P>
			<Tag size="small" href="https://google.com" color="primary">Маленькая ссылка</Tag>
			<Tag size="middle" href="https://google.com" color="ghost">Средняя ссылка</Tag>
			<Tag size="small" href="https://google.com" color="gray">Маленькая ссылка</Tag>
			<Tag size="small" href="https://google.com" color="green">Маленькая ссылка</Tag>
			<Tag size="small" href="https://google.com" color="red">Маленькая ссылка</Tag>
			<Rating isEditable={true} rating={rating} setRating={setRating} />
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async() => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
		firstCategory
	});

	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface IHomeProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
}
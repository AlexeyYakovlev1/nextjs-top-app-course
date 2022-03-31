import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from 'react';
import withLayout from "../../components/layout/withLayout";
import TopPageComponent from "../../components/TopPage/TopPageComponent";
import { firstLevelMenu } from "../../helpers/helpers";
import { IMenuItem } from "../../interfaces/menu.interface";
import { ITopPageModel, TopLevelCategory } from "../../interfaces/page.interface";
import { IProductModel } from "../../interfaces/product.interface";

const TopPage = ({ firstCategory, page, products }:ITopPageProps): JSX.Element => {
	return (
		<TopPageComponent firstCategory={firstCategory} page={page} products={products} />
	);
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async() => {
	let paths:string[] = [];

	for (const m of firstLevelMenu) {
		const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
			firstCategory: m.id
		});

		paths = paths.concat(menu.flatMap(s => s.pages.map(p => `${m.route}/${p.alias}`)));
	}
	
	return {
		paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}

	const firstCategoryItem = firstLevelMenu.find(m => m.route.replace("/", "") === params.type);
	
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}
	
	try {
		const { data: menu } = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
			firstCategory: firstCategoryItem.id
		});

		if (!menu.length) {
			return {
				notFound: true
			};
		}

		const { data: page } = await axios.get<ITopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`);
		const { data: products } = await axios.post<IProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
			category: page.category,
			limit: 10
		});

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
				page,
				products
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

interface ITopPageProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: TopLevelCategory;
	page: ITopPageModel;
	products: IProductModel[];
}
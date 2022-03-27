import React from 'react';
import classes from "./Menu.module.sass";
import { AppContext } from "../../context/app.context";
import CoursesIcon from "./icons/CoursesIcon";
import ServicesIcon from "./icons/ServicesIcon";
import BooksIcon from "./icons/BooksIcon";
import ProductsIcon from "./icons/ProductsIcon";
import { IFirstLevelMenuItem, IPageItem } from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../interfaces/page.interface";
import Link from "next/link";
import cn from "classnames";

const firstLevelMenu:IFirstLevelMenuItem[] = [
	{
		route: "/courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses
	},
	{
		route: "/services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services
	},
	{
		route: "/books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books
	},
	{
		route: "/products", name: "Товары", icon: <ProductsIcon />, id: TopLevelCategory.Products
	},
];

const Menu = () => {
	const { menu, setMenu, firstCategory } = React.useContext(AppContext);

	// Построение первого уровня меню
	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => {
					return (
						<div key={m.route}>
							<Link href={m.route}>
								<a>
									<div className={cn(classes.firstLevel, {
										[classes.firstLevelActive]: m.id === firstCategory
									})}>
										{m.icon}
										<span>{m.name}</span>
									</div>
								</a>
							</Link>
							{m.id === firstCategory && buildSecondLevel(m)}
						</div>	
					);
				})}
			</>
		);
	};

	// Построение второго уровня меню
	const buildSecondLevel = (menuItem:IFirstLevelMenuItem) => {
		return (
			<div className={classes.secondBlock}>
				{menu.map(m => {
					return (
						<div key={m._id.secondCategory}>
							<div className={classes.secondLevel}>
								{m._id.secondCategory}
							</div>
							<div className={cn(classes.secondLevelBlock, {
								[classes.secondLevelBlockOpened]: m.isOpened
							})}>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};
	
	// Построение третьего уровня меню
	const buildThirdLevel = (pages:IPageItem[], route:string) => {
		return (
			<>
				{pages.map(page => {
					return (
						<Link href={`${route}/${page.alias}`}>
							<a
								className={cn(classes.thirdLevel, {
									[classes.thirdLevelActive]: false
								})}
							>
								{page.category}
							</a>
						</Link>
					);
				})}
			</>
		);
	};

	return (
		<div className={classes.menu}>
			{buildFirstLevel()}
		</div>
	);
};

export default Menu;
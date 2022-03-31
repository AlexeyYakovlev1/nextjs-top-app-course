import React from 'react';
import classes from "./Menu.module.sass";
import { AppContext } from "../../context/app.context";
import { IFirstLevelMenuItem, IPageItem } from "../../interfaces/menu.interface";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

const Menu = () => {
	const { menu, setMenu, firstCategory } = React.useContext(AppContext);
	const router = useRouter();

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory === secondCategory) {
				m.isOpened = !m.isOpened;
			}

			return m;
		}));
	};

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
					if (m.pages.map(p => p.alias).includes(router.asPath.split("/")[2])) {
						m.isOpened = true;
					}

					return (
						<div key={m._id.secondCategory}>
							<div className={classes.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
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
						<Link key={page.category} href={`${route}/${page.alias}`}>
							<a
								className={cn(classes.thirdLevel, {
									[classes.thirdLevelActive]: `${route}/${page.alias}` === router.asPath
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
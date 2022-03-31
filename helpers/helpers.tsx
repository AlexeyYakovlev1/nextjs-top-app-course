import CoursesIcon from "./icons/CoursesIcon";
import ServicesIcon from "./icons/ServicesIcon";
import BooksIcon from "./icons/BooksIcon";
import ProductsIcon from "./icons/ProductsIcon";
import { TopLevelCategory } from "../interfaces/page.interface";
import { IFirstLevelMenuItem } from "../interfaces/menu.interface";

export const firstLevelMenu:IFirstLevelMenuItem[] = [
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

export const priceRu = (price:number): string => {
	return price.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, " ").concat(" ₽");
};
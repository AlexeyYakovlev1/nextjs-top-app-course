import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
	size?: "small" | "middle";
	color?: "ghost" | "red" | "gray" | "green" | "primary";
	href?: string;
}
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: React.ReactNode;
	appearance?: "primary" | "ghost";
	arrow?: "right" | "down" | "none";
}
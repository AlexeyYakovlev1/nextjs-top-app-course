import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: React.ReactNode;
	size?: "small" | "middle" | "big";
}
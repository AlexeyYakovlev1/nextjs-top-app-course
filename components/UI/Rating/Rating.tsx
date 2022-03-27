import React from 'react';
import classes from "./Rating.module.sass";
import cn from "classnames";
import { IRatingProps } from "./Rating.props";
import StarIcon from "./Star";

const Rating = ({ isEditable=false, rating, setRating, ...props }:IRatingProps) => {
	const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));
	
	React.useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line
	}, [rating]);

	const changeDisplay = (index:number) => {
		if (!isEditable) return;
		constructRating(index);
	};

	const onClick = (index:number) => {
		if (!isEditable || !setRating) return;
		setRating(index);
	};

	const handleSpace = (index:number, event:React.KeyboardEvent<SVGElement>) => {
		if (event.code !== "Space" || !setRating) return;

		setRating(index);
	};

	const constructRating = (currentRating:number) => {
		const updatedArray = ratingArray.map((_: JSX.Element, index: number) => {
			return (
				<span
					className={cn(classes.star, {
						[classes.filled]: index < currentRating,
						[classes.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(index + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(index + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(event:React.KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, event)}
					/>
				</span>
			);
		});

		setRatingArray(updatedArray);
	};

	return (
		<div {...props}>
			{ratingArray.map((rating, index) => (<span key={index}>{rating}</span>))}
		</div>
	);
};

export default Rating;
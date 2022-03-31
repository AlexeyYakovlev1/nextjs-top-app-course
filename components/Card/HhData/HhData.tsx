import Card from "../Card";
import classes from "./HhData.module.sass";
import RateIcon from "./RateIcon";
import { IHhDataProps } from "./HhData.props";
import { priceRu } from "../../../helpers/helpers";

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }:IHhDataProps): JSX.Element => {
	return (
		<div className={classes.hh}>
			<Card className={classes.count}>
				<div className={classes.title}>Всего вакансий</div>
				<div className={classes.countValue}>{count}</div>
			</Card>
			<Card className={classes.salary}>
				<div>
					<div className={classes.title}>Начальный</div>
					<div className={classes.salaryValue}>{priceRu(juniorSalary)}</div>
					<div className={classes.rate}>
						<RateIcon className={classes.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={classes.title}>Средний</div>
					<div className={classes.salaryValue}>{priceRu(middleSalary)}</div>
					<div className={classes.rate}>
						<RateIcon className={classes.filled} />
						<RateIcon className={classes.filled} />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={classes.title}>Профессионал</div>
					<div className={classes.salaryValue}>{priceRu(seniorSalary)}</div>
					<div className={classes.rate}>
						<RateIcon className={classes.filled} />
						<RateIcon className={classes.filled} />
						<RateIcon className={classes.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};

export default HhData;
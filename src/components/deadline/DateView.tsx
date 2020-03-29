import * as React from "react";
import { getMonthAsWord } from "../../helpers/helpers";

import "./dateViewStyles.css";

export type DateViewProps = {
	date: Date;
};

export const DateView: React.FC<DateViewProps> = props => {
	const date = props.date;
	const month = getMonthAsWord(date.getMonth());
	const day = date.getDate();
	const year = date.getFullYear();
	return (
		<div className="dateview">
			<div className="dateview__date">
				<div className="dateview__row">
					<div className="dateview__date--day">{day}</div>
					<div className="dateview__date--month">{month}</div>
				</div>
				<div className="dateview__date--year">{year}</div>
			</div>
		</div>
	);
};

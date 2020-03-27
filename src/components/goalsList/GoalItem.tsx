import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./goalItemStyles.css";

export type GoalItemProps = {
	goalTitle: string;
	success: boolean;
};

export const GoalItem: React.FC<GoalItemProps> = props => {
	return (
		<div className="goal-item">
			<div className="goal-item__icon">
				<FontAwesomeIcon icon={props.success ? faCheck : faSpinner} />
			</div>
			<div className="goal-item__title">{props.goalTitle}</div>
		</div>
	);
};

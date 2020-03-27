import * as React from "react";
import { ListGroup } from "react-bootstrap";

import "./goalsListStyles.css";
import { GoalItem } from "./GoalItem";

type GoalItem = {
	title: string;
	success: boolean;
};

export type GoalsListProps = {
	goalsList: GoalItem[];
};

export const GoalsList: React.FC<GoalsListProps> = props => {
	const listGroupProps = {};
	return (
		<div className="list">
			<div className="list__header">Цели:</div>
			<ListGroup variant="flush">
				{props.goalsList.length ? (
					props.goalsList.map((goal, idx) => {
						const itemProps: any = {};
						if (goal.success) {
							itemProps.variant = "success";
						}
						return (
							<ListGroup.Item {...itemProps} key={idx}>
								<GoalItem goalTitle={goal.title} success={goal.success} />
							</ListGroup.Item>
						);
					})
				) : (
					<ListGroup.Item>
						<span>Цели на проект не определены</span>
					</ListGroup.Item>
				)}
			</ListGroup>
		</div>
	);
};

import * as React from "react";
import { Card } from "react-bootstrap";
import "./deadlineStyles.css";
import { DateView } from "./DateView";

export type DeadlineProps = {
	dateStart?: Date;
	dateEnd: Date;
};

export const Deadline: React.FC<DeadlineProps> = props => {
	return (
		<div className="deadline">
			<div className="dedline__start">
				<Card className="text-center">
					<Card.Header>Начало</Card.Header>
					<Card.Body>
						<DateView date={props.dateEnd} />
					</Card.Body>
				</Card>
			</div>
			<div className="deadline__divider">-</div>
			<div className="dedline__end">
				<Card className="text-center">
					<Card.Header>Конец</Card.Header>
					<Card.Body>
						<DateView date={props.dateEnd} />
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

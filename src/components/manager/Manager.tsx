import * as React from "react";
import { Card } from "react-bootstrap";
import { managerImg } from "../../helpers/img";

export type ManagerProps = {
	fullName: string;
	position: string;
	img?: string;
};

export const Manager: React.FC<ManagerProps> = props => {
	return (
		<Card bg="light" style={{ width: "200px" }}>
			<Card.Img variant="top" src={managerImg} />
			<Card.Body>
				<Card.Title>{props.fullName}</Card.Title>
				<Card.Text>{props.position}</Card.Text>
			</Card.Body>
		</Card>
	);
};

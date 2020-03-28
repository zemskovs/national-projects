import * as React from "react";
import { Modal, Button } from "react-bootstrap";

export const MapMoadl = props => {
	const [show, setShow] = React.useState<boolean>(true);
	return (
		<Modal show={show} onHide={() => setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>Modal body text goes here.</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary">Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

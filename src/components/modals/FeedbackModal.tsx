import * as React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { events } from "../../helpers/helpers";
import { TitledText } from "../typographys/TitledText/TitledText";

export const FeedbackModal: React.FC = props => {
	const [show, setShow] = React.useState<boolean>(true);
	return (
		<Modal show={show} onHide={() => setShow(false)} centered>
			<Modal.Header closeButton>
				<Modal.Title style={{ lineHeight: 1.2 }}>Обратная связь</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Ваше имя</Form.Label>
						<Form.Control type="text" placeholder="Иван" />
					</Form.Group>

					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Ваше мнение о выполняемых проектах</Form.Label>
						<Form.Control as="textarea" rows="3" />
					</Form.Group>
					<Button
						onClick={e => {
							e.preventDefault();
							setShow(false);
						}}
						variant="primary"
						type="submit"
					>
						Отправить
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

import * as React from "react";
import { Modal } from "react-bootstrap";
import { events } from "../../helpers/helpers";
import { TitledText } from "../typographys/TitledText/TitledText";

import "./mapModalEventStyles.css";

export type MapMoadlEventProps = {
	eventId: number;
};

export const MapMoadlEvent: React.FC<MapMoadlEventProps> = props => {
	const event = events.find(event => event.id === props.eventId);
	const [show, setShow] = React.useState<boolean>(true);
	return (
		<Modal show={show} onHide={() => setShow(false)} centered>
			<Modal.Header closeButton>
				<Modal.Title style={{ lineHeight: 1.2 }}>{event.project}</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<div className="event-info">
					{event.description && (
						<div className="event-info__description">
							<TitledText title="Описания мероприятия">
								{event.description}
							</TitledText>
						</div>
					)}
					<div className="event-info__date">
						<TitledText title="Дата реализации">
							{event.date.toLocaleDateString()}
						</TitledText>
					</div>
					{event.address && (
						<div className="event-info__address">
							<TitledText title="Адрес">{event.address}</TitledText>
						</div>
					)}
					<div className="event-info__result">
						<TitledText title="Стадия реализации">{event.result}</TitledText>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

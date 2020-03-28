import * as React from "react";
import { Page } from "../components/layouts/Page";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { Deadline } from "../components/deadline/Deadline";
import { Map } from "../components/map/Map";

import "./culturePageStyles.css";
import { dataForMap } from "../helpers/helpers";
import { Projects } from "../components/projects/Projects";
import { Section } from "../components/section/Section";
import { Reactions } from "../components/reactions/Reactions";
import { Menu } from "../components/menu/Menu";
import { News, news } from "../components/news/News";
import { t } from "../services/TextService";

export const MainPage: React.FC = props => {
	return (
		<>
			<Jumbotron fluid>
				<Container>
					<Row>
						<Col></Col>
					</Row>
				</Container>
			</Jumbotron>
		</>
	);
};

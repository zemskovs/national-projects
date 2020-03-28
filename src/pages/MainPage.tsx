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

import "./mainPageStyles.css";
import { NatProjCards } from "../components/projectCards/NatProjCards";

export const MainPage: React.FC = props => {
	return (
		<>
			<Jumbotron className="main-page__jumbo" fluid>
				<Container>
					<Row>
						<Col>
							<div className="main-page__welcome">
								<h1 className="title">
									Рады приветствовать вас на портале национальных проектов
									Чувашии
								</h1>
							</div>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
			<Container>
				<Section title="Национальные проекты">
					<Row>
						<Col>
							<NatProjCards />
						</Col>
					</Row>
				</Section>
			</Container>
		</>
	);
};

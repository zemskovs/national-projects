import * as React from "react";
import { Page } from "../components/layouts/Page";
import { Jumbotron } from "../components/jumbotron/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";
import { Deadline } from "../components/deadline/Deadline";
import { Map } from "../components/map/Map";

import "./culturePageStyles.css";
import { dataForMap } from "../helpers/helpers";
import { Projects } from "../components/projects/Projects";
import { Section } from "../components/section/Section";
import { Reactions } from "../components/reactions/Reactions";
import { Menu } from "../components/menu/Menu";
import { News, news } from "../components/news/News";

export const CulturePage: React.FC = props => {
	return (
		<Page>
			<Menu />
			<Jumbotron
				title="Культура"
				description="Увелечение количества граждан, вовлеченных в культурную деятельность путем поддержки "
			/>
			<Section secondary>
				<Container>
					<Projects />

					<Row>
						<Col md="auto" className="ml-auto">
							<Deadline dateEnd={new Date()} dateStart={new Date()} />
						</Col>
					</Row>
				</Container>
			</Section>

			<Section>
				<Container>
					<Row>
						<Col>
							<Map data={dataForMap} />
						</Col>
					</Row>
				</Container>
			</Section>

			<Section secondary>
				<Container>
					<Row>
						<Col>
							<News
								news={news}
								allNewsLink="http://culture.cap.ru/news?type=news&action=bab1af34-684b-4b51-8899-8a8f54b5289d"
							/>
						</Col>
					</Row>
				</Container>
			</Section>
			{/* <Section>
				<Container>
					<Row>
						<Col>Отзывы</Col>
					</Row>
				</Container>
			</Section> */}
			<Section>
				<Container>
					<Row>
						<Col>
							<Reactions />
						</Col>
					</Row>
				</Container>
			</Section>
		</Page>
	);
};

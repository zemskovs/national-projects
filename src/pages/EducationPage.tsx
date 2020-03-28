import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section } from "../components/section/Section";
import { Projects } from "../components/projects/Projects";
import { Deadline } from "../components/deadline/Deadline";
import { dataForMap } from "../helpers/helpers";
import { News, news } from "../components/news/News";
import { Reactions } from "../components/reactions/Reactions";
import { Map } from "../components/map/Map";
import { Jumbotron } from "../components/jumbotron/Jumbotron";

export const EducationPage: React.FC = () => {
	return (
		<>
			<Jumbotron
				title="Образование"
				description="Обеспечение глобальной конкурентоспособности российского образования, вхождение Российской Федерации в число 10 ведущих стран мира по качеству общего образования, и воспитание гармонично развитой и социально ответственной личности."
				budget={{ reg: 30, fed: 5, other: 3 }}
			/>
			<Section secondary>
				<Container>
					<Projects />

					<Row>
						<Col md="auto" className="ml-auto">
							<Deadline
								dateEnd={new Date()}
								dateStart={new Date()}
							/>
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
			<Section>
				<Container>
					<Row>
						<Col>
							<Reactions />
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};
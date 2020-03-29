import * as React from "react";
import { Page } from "../components/layouts/Page";
import { Jumbotron } from "../components/jumbotron/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";
import { Deadline } from "../components/deadline/Deadline";
import { Map } from "../components/map/Map";

import "./culturePageStyles.css";
import { dataForMap, goalsList } from "../helpers/helpers";
import { Projects } from "../components/projects/Projects";
import { Section } from "../components/section/Section";
import { Reactions } from "../components/reactions/Reactions";
import { Menu } from "../components/menu/Menu";
import { News, news } from "../components/news/News";
import { GoalsList } from "../components/goalsList/GoalsList";

export const CulturePage: React.FC = props => {
	return (
		<>
			<Jumbotron
				title="Культура"
				description="Увеличение посещений организаций культуры, создание условий для творческой реализации граждан, увеличение числа обращений к цифровым ресурсам в сфере культуры."
				budget={{ reg: 10, fed: 20, other: 2 }}
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
			<hr />
			<Section>
				<Container>
					<Row>
						<Col>
							<h3 className="text-center pt-5 pb-3 text-uppercase">
								Ход выполнениея задач по региональным проектам
							</h3>
							<GoalsList goalsList={goalsList} />
						</Col>
					</Row>
				</Container>
			</Section>

			<Section secondary>
				<Container>
					<Row>
						<Col>
							<h3
								style={{ color: "#ffffff" }}
								className="text-center pt-5 pb-3 text-uppercase"
							>
								Новости по проектам
							</h3>
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
							<h3 className="text-center pt-5 pb-3 text-uppercase">
								Ваша оценка нашей деятельности
							</h3>
							<Reactions />
						</Col>
					</Row>
				</Container>
			</Section>
		</>
	);
};

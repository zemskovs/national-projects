import * as React from "react";
import { Page } from "../components/layouts/Page";
import { Jumbotron } from "../components/jumbotron/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";
import { GoalsList } from "../components/goalsList/GoalsList";
import { Deadline } from "../components/deadline/Deadline";
import { Manager } from "../components/manager/Manager";

import "./culturePageStyles.css";
import { Section } from "../components/section/Section";
import { Projects } from "../components/projects/Projects";

export const CulturePage: React.FC = props => {
	return (
		<Page>
			<Jumbotron
				title="Культура"
				description="Увелечение количества граждан, вовлеченных в культурную деятельность путем поддержки "
			/>
			<Section secondary>
				{/* <div style={{position: "absolute", left: 0, top: 0}}>
					<Manager
						fullName="Лизакова Роза Михайловна"
						position="Министр культуры, по делам национальностей и архивного дела Чувашской Республики"
					/>
				</div> */}
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
						<Col>Карта</Col>
					</Row>
				</Container>
			</Section>

			<Section secondary>
				<Container>
					<Row>
						<Col>Новости</Col>
					</Row>
				</Container>
			</Section>

			<Section>
				<Container>
					<Row>
						<Col>Реакции</Col>
					</Row>
				</Container>
			</Section>
		</Page>
	);
};

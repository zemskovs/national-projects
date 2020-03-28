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

export const CulturePage: React.FC = props => {
	return (
		<Page>
			<Menu />
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
						<Col>Новости</Col>
					</Row>
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<Col>Отзывы</Col>
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
		</Page>
	);
};

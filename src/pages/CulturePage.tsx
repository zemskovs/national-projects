import * as React from "react";
import { Page } from "../components/layouts/Page";
import { Jumbotron } from "../components/jumbotron/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";
import { GoalsList } from "../components/goalsList/GoalsList";
import { Deadline } from "../components/deadline/Deadline";
import { Manager } from "../components/manager/Manager";

import "./culturePageStyles.css";

export const CulturePage: React.FC = props => {
	return (
		<Page>
			<Jumbotron
				title="Культура"
				description="Увелечение количества граждан, вовлеченных в культурную деятельность путем поддержки "
			/>
			<Container>
				<Row>
					<Col sm="auto" className="manager-col">
						<Manager fullName="Александр Елахов" position="руководитель" />
					</Col>
					<Col md="auto">
						<Deadline dateEnd={new Date()} dateStart={new Date()} />
					</Col>
				</Row>
				<Row>
					<Col>
						<GoalsList
							goalsList={[
								{ title: "Вау", success: true },
								{ title: "Не вау", success: false }
							]}
						/>
					</Col>
				</Row>
			</Container>
		</Page>
	);
};

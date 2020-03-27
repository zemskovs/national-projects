import * as React from "react";
import { Page } from "../components/layouts/Page";
import { Jumbotron } from "../components/jumbotron/Jumbotron";
import { Container, Row } from "react-bootstrap";
import { GoalsList } from "../components/goalsList/GoalsList";
import { Deadline } from "../components/deadline/Deadline";

export const CulturePage: React.FC = props => {
	return (
		<Page>
			<Jumbotron
				title="Культура"
				description="Увелечение количества граждан, вовлеченных в культурную деятельность путем поддержки "
			/>
			<Container>
				<Row>
					<GoalsList goalsList={[{title: "Вау", success: true}]}/>
				</Row>
			</Container>
			<Container>
					<GoalsList goalsList={[{title: "Вау", success: true}]}/>
			</Container>
			<Container>
					<Deadline dateEnd={new Date()} dateStart={new Date()} />
			</Container>
		</Page>
	);
};

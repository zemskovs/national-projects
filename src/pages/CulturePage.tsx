import * as React from "react";
import { Page } from "../components/layouts/Page";
import { Jumbotron } from "../components/jumbotron/Jumbotron";
import { Container, Row } from "react-bootstrap";
import { GoalsList } from "../components/goalsList/GoalsList";
import { Deadline } from "../components/deadline/Deadline";
import { Manager } from "../components/manager/Manager";

export const CulturePage: React.FC = props => {
	return (
		<Page>
			<Jumbotron
				title="Культура"
				description="Увелечение количества граждан, вовлеченных в культурную деятельность путем поддержки "
			/>
			<Container>
					<GoalsList goalsList={[{title: "Вау", success: true}, {title: "Не вау", success: false}]}/>
			</Container>
			<Container>
					<Deadline dateEnd={new Date()} dateStart={new Date()} />
			</Container>
			<Container>
				<Manager fullName="Александр Елахов" position="руководитель" />
			</Container>
		</Page>
	);
};

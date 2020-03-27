import * as React from "react";
import { Deadline } from "./components/deadline/Deadline";
import { Manager } from "./components/manager/Manager";
import { GoalsList } from "./components/goalsList/GoalsList";
import { ProjectTitle } from "./components/projectTitle/ProjectTitle";

const goals = [
	{
		title:
			"Перестелить дороженое покрытие между Чебоксарами и Новочебоксарском",
		success: false
	},
	{
		title: "Залатать ямы по улицк калинина",
		success: true
	}
];

export const App = () => {
	return (
		<>
			<Deadline dateEnd={new Date()} />
			<Manager
				fullName="Земсков Александр Петрович"
				position="Заместитель директора по работе с котиками"
			/>
			<GoalsList goalsList={goals} />
			<ProjectTitle title="Творческие люди" />
		</>
	);
};

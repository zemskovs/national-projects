import { t } from "../services/TextService";
import {
	ProjectCard,
	Project,
	ProjectCodes
} from "../components/projectCards/ProjectCard";

export const getMonthAsWord = (month: number): string => {
	const map = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
	];
	return map[month];
};

export const dataForMap = {
	center: [56.044091, 47.19974],
	markers: [
		{
			position: [56.050782, 47.163466],
			eventId: 1
		},
		{
			position: [56.129644, 47.247925],
			eventId: 2
		}
	]
};

export const events = [
	{
		id: 1,
		project: "Чувашский государственный театр юного зрителя",
		eventName: "Капитальный ремонт",
		description: "Капитальный ремонт",
		result: "Завершено",
		address: "г. Чебоксары, Московский просп., д.33/9",
		date: new Date()
	},
	{
		id: 2,
		project: "Культурно-досуговый центр",
		eventName: "Новое строительство",
		description: "Новое строительство",
		result: "Завершено",
		address: "Канашский район, с. Шихазаны, ул. Гагарина, д.25",
		date: new Date()
	}
];

export const nationalProjectsData: Project[] = [
	{
		code: ProjectCodes.education,
		title: "Образование",
		budget: 38,
		childrens: 8
	},
	{
		code: ProjectCodes.culture,
		title: "Культура",
		budget: 32,
		childrens: 3
	},
	{
		code: ProjectCodes.demos,
		title: "Демография",
		budget: 18,
		childrens: 5
	}
];

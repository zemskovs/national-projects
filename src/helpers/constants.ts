import { t } from "../services/TextService";

type NationalProjectsType = {
	title: string;
	url: string;
	icon?: string; //потом сделать обязательным
};

export const nationalProjects: NationalProjectsType[] = [
	{
		title: t("Культура"),
		url: "/culture"
	},
	{
		title: t("Демография"),
		url: "/demos"
	},
	{
		title: t("Образование"),
		url: "/education"

	}
];

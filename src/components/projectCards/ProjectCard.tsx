import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faRoad,
	faBook,
	faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import { t } from "../../services/TextService";

export enum ProjectCodes {
	roads = "roads",
	culture = "culture",
	digital = "digital"
}

export type Project = {
	code: ProjectCodes;
	title: string;
	budget: number;
	childrens: number;
};

export type ProjectCardProps = {
	project: Project;
};

const iconProjectsMap = {
	[ProjectCodes.roads]: faRoad,
	[ProjectCodes.culture]: faBook,
	[ProjectCodes.digital]: faLaptopCode
};

export const ProjectCard: React.FC<ProjectCardProps> = props => {
	const icon = iconProjectsMap[props.project.code];
	return (
		<div className="project-card">
			<div className="project-card__header">
				<div className="icon">
					<FontAwesomeIcon icon={icon} />
				</div>
				<span className="textproj-title">{props.project.title}</span>
			</div>
			<span className="budget">{props.project.budget}</span>
			<div className="project-card__footer">{`${t("Региональных проектов")}: ${
				props.project.childrens
			}`}</div>
		</div>
	);
};

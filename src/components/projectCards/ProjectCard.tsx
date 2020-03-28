import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faRoad,
	faBook,
	faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import { t } from "../../services/TextService";

import "./projectCardStyles.css";
import { Link } from "react-router-dom";

export enum ProjectCodes {
	roads = "roads",
	culture = "culture",
	demos = "demos"
}

export type Project = {
	code: ProjectCodes;
	title: string;
	budget: number;
	childrens: number;
};

export type ProjectCardProps = {
	project: Project;
	onClick: () => void;
};

const iconProjectsMap = {
	[ProjectCodes.roads]: require("../../assets/roads.png"),
	[ProjectCodes.culture]: require("../../assets/culture.png"),
	[ProjectCodes.demos]: require("../../assets/digital.png")
};

export const ProjectCard: React.FC<ProjectCardProps> = props => {
	const icon = iconProjectsMap[props.project.code];
	return (
		<Link onClick={() => props.onClick()} to={`/${props.project.code}`}>
			<div className="project-card">
				<div className="icon">
					<img src={icon} height="60" />
				</div>
				<div className="project-card__info">
					<span className="textproj-title">{props.project.title}</span>
					<span className="childrens">{`${t("Региональных проектов")}: ${
						props.project.childrens
					}`}</span>
				</div>
				<div className="project-card__budget">
					<span className="digit">{props.project.budget}</span>
					<span className="type">млн</span>
				</div>
			</div>
		</Link>
	);
};

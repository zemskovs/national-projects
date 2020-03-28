import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { nationalProjectsData } from "../../helpers/helpers";

import "./natProjCardsStyles.css";

export type NatProjCardsProps = {
	onClick?: () => void;
};

export const NatProjCards: React.FC<NatProjCardsProps> = props => {
	const onClick = props.onClick ? props.onClick : () => {};
	return (
		<div className="projects-cards">
			{nationalProjectsData.map((project, idx) => {
				return <ProjectCard onClick={onClick} key={idx} project={project} />;
			})}
		</div>
	);
};

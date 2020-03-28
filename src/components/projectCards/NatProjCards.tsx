import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { nationalProjectsData } from "../../helpers/helpers";

import "./natProjCardsStyles.css";

export const NatProjCards: React.FC = props => {
	return (
		<div className="projects-cards">
			{nationalProjectsData.map((project, idx) => {
				return <ProjectCard project={project} />;
			})}
		</div>
	);
};

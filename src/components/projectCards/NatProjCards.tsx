import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { nationalProjectsData } from "../../helpers/helpers";

import "./natProjCardsStyles.css";

export type NatProjCardsProps = {
	onClick: () => void;
};

export const NatProjCards: React.FC<NatProjCardsProps> = props => {
	return (
		<div className="projects-cards">
			{nationalProjectsData.map((project, idx) => {
				return (
					<ProjectCard onClick={props.onClick} key={idx} project={project} />
				);
			})}
		</div>
	);
};

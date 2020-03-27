import * as React from "react";

import "./projectTitleStyles.css";

export type ProjectTitleProps = {
	title: string;
};

export const ProjectTitle: React.FC<ProjectTitleProps> = props => {
	return (
		<div className="project-title">
			<span className="project-title__text">{props.title}</span>
		</div>
	);
};

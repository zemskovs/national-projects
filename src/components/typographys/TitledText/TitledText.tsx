import * as React from "react";
import { t } from "../../../services/TextService";

import "./titledTextStyles.css";

export type TitledTextProps = {
	title: string;
};

export const TitledText: React.FC<TitledTextProps> = props => {
	return (
		<div className="titled-text">
			<span className="title">{`${t(props.title)}:`}</span>
			<span className="text">{props.children}</span>
		</div>
	);
};

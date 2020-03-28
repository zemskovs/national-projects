import * as React from "react";

type SectionProps = {
	secondary?: boolean
}

export const Section: React.FC<SectionProps> = props => {
	return (
		<div style={{ backgroundColor: props.secondary ? "#3c61af" : "#ffffff", marginTop: "-1px", position: "relative" }} className="pt-5 pb-5">
			{props.children}
		</div>
	);
};

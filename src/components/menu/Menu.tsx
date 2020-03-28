import * as React from "react";

import "./menuStyles.css";
import { t } from "../../services/TextService";
import { NatProjCards } from "../projectCards/NatProjCards";

export const Menu = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	return (
		<div className="menu">
			<div className="menu__hamburger" onClick={() => setOpen(!open)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className={`menu__content ${open ? "open" : "hide"}`}>
				<div className="navigation">
					<div className="main-link">
						<a href="#">{t("На главную")}</a>
					</div>
					<div className="national-projects">
						<div className="title">{`${t("Национальные проекты")}:`}</div>
						<NatProjCards />
					</div>
				</div>
			</div>
		</div>
	);
};

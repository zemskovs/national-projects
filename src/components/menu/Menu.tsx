import * as React from "react";

import "./menuStyles.css";
import { t } from "../../services/TextService";
import { NatProjCards } from "../projectCards/NatProjCards";
import { Link } from "react-router-dom";

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
						<Link onClick={() => setOpen(false)} to="/">
							{t("На главную")}
						</Link>
					</div>
					<div className="national-projects">
						<div className="title">{`${t("Национальные проекты")}:`}</div>
						<NatProjCards onClick={() => setOpen(false)} />
					</div>
				</div>
			</div>
		</div>
	);
};

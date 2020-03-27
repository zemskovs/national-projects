import * as React from "react";
import NavbarBase from "react-bootstrap/Navbar";

type NavbarProps = {};

const logo = require("./logo.svg");

export const Navbar: React.FC = props => {
	return (
		<NavbarBase bg="light">
			<NavbarBase.Brand href="#home">
				<img
					src={logo}
					width="30"
					height="30"
					className="d-inline-block align-top w-100"
					alt="Национальные проекты Чувашии"
				/>
			</NavbarBase.Brand>
		</NavbarBase>
	);
};

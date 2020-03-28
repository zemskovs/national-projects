import * as React from "react";
import NavbarBase from "react-bootstrap/Navbar";
import "./navbar.css";

type NavbarProps = {};

const logo = require("./logo.svg");

export const Navbar: React.FC = props => {
	return (
		<div className="navbar__wrap">
			<NavbarBase bg="white">
				<NavbarBase.Brand href="/" className="navbar__top">
					<img
						src={logo}
						height="30"
						className="d-inline-block align-top w-100"
						alt="Национальные проекты Чувашии"
					/>
				</NavbarBase.Brand>
				{/* <NavbarBase.Toggle />
				<NavbarBase.Collapse>
					<Nav
						className="justify-content-end"
						style={{ width: "100%" }}
					>
						<p>jj</p>
					</Nav>
				</NavbarBase.Collapse> */}
			</NavbarBase>
		</div>
	);
};

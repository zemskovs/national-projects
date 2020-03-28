import * as React from "react";
import NavbarBase from "react-bootstrap/Navbar";
import "./navbar.css";
import { Form, FormControl, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { t } from "../../services/TextService";

type NavbarProps = {};

const logo = require("./logo.svg");

export const Navbar: React.FC = props => {
	return (
		<div className="navbar__wrap">
			<NavbarBase bg="white" expand="sm">
				<NavbarBase.Brand href="/" className="navbar__top">
					<img
						src={logo}
						height="30"
						className="d-inline-block align-top w-100"
						alt="Национальные проекты Чувашии"
					/>
				</NavbarBase.Brand>
				<NavbarBase.Toggle aria-controls="basic-navbar-nav" />
				<NavbarBase.Collapse id="basic-navbar-nav">
					<Form inline>
						<FormControl type="text" placeholder={t("Поиск")} />
						<Button variant="outline-primary">
							<FontAwesomeIcon icon={faSearch} />
						</Button>
					</Form>
					<Nav className="justify-content-end" style={{ width: "100%" }}>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</NavbarBase.Collapse>
			</NavbarBase>
		</div>
	);
};

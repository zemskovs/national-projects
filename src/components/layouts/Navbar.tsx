import * as React from "react";
import NavbarBase from "react-bootstrap/Navbar";
import "./navbar.css";
import { Form, FormControl, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGlasses } from "@fortawesome/free-solid-svg-icons";
import { t } from "../../services/TextService";

type NavbarProps = {};

const logo = require("./logo.svg");
const chuvFlag = require("../../assets/chuvflag.png");
const gerb = require("../../assets/gerb2.png");

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
				<Form inline>
					<FormControl
						type="text"
						className="mr-sm-2"
						placeholder={t("Поиск")}
					/>
					<Button variant="outline-primary">
						<FontAwesomeIcon icon={faSearch} />
					</Button>
				</Form>
				<Nav.Link
					style={{ fontSize: "2rem", marginLeft: "8px" }}
					href="#visually_impaired"
				>
					<FontAwesomeIcon icon={faGlasses} />
				</Nav.Link>
				<Nav.Link href="#chuv_language">
					<img src={chuvFlag} height="32" />
				</Nav.Link>
			</NavbarBase>
		</div>
	);
};

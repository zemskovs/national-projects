import * as React from "react";
import JumbotronBase from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./jumbotron.css";
import { Budget, BudgetProps } from "../budget/Budget";

type JumbotronProps = {
	title: string;
	description?: string;
	budget: BudgetProps;
};

const firstImg = require("./1.svg");

export const Jumbotron: React.FC<JumbotronProps> = props => {
	return (
		<>
			<JumbotronBase fluid>
				<div className="jumbotron__wrap">
					<Container className="jumbotron_container">
						<p
							style={{
								textAlign: "center",
								textTransform: "uppercase",
								fontSize: "1.2em"
							}}
						>
							Цели проекта
						</p>
						<h1 className="jumbotron__title">{props.title}</h1>
						<p className="jumbotron__description">
							{props.description}
						</p>
						<Budget {...props.budget} />
					</Container>
				</div>
			</JumbotronBase>
			<div className="jumbotron__divider">
				<div className="jumbotron__divider-image">
					<img src={firstImg} className="w-100" />
				</div>
			</div>
		</>
	);
};
Jumbotron.displayName = "Jumbotron";

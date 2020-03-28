import * as React from "react";
import "./projects.css";
import { Manager } from "../manager/Manager";

const projects = [
	{
		title: "Творческие люди"
	},
	{ title: "Культурная среда" },
	{ title: "Цифровая культура" }
];

const manager = require("../../assets/roza_0.jpg")

export const Projects: React.FC = props => {
	return (
		<div className="d-flex justify-content-center">
			<div className="pr-3">
				<Manager
					fullName="Лизакова Роза Михайловна"
					position="Министр культуры, по делам национальностей и архивного дела Чувашской Республики"
					img={manager}
				/>
			</div>
			<div className="d-flex flex-column justify-content-center projects">
				<p className="text-center">
					Чувашия участвует в трех региональных проектах:
				</p>
				<div>
					<ul>
						{projects.map((p, idx) => (
							<li key={idx} className="project__list-element">{p.title}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

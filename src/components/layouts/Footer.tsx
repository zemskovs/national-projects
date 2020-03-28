import * as React from "react";
import "./footer.css";
import { nationalProjects } from "../../helpers/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = props => {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<h6>Информация</h6>
						<p className="text-justify">
							Какая-то супер информация про национальные проекты
						</p>
					</div>

					<div className="col-xs-6 col-md-3">
						<h6>Проекты</h6>
						<ul className="footer-links">
							{nationalProjects.map(p => (
								<li key={p.title}>
									<a href={p.url}>{p.title}</a>
								</li>
							))}
						</ul>
					</div>

					<div className="col-xs-6 col-md-3">
						<h6>Списки</h6>
						<ul className="footer-links">Добавить ссылок</ul>
					</div>
				</div>
				<hr />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-6 col-xs-12">
						<p className="copyright-text">Копирайт</p>
					</div>

					<div className="col-md-4 col-sm-6 col-xs-12">
						<ul className="social-icons">
							<li>
								<a className="vk" href="#">
									<FontAwesomeIcon icon={faVk} />
								</a>
							</li>
							<li>
								<a className="instagram" href="#">
									<FontAwesomeIcon icon={faInstagram} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

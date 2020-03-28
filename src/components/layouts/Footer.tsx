import * as React from "react";
import "./footer.css";
import { nationalProjects } from "../../helpers/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Footer: React.FC = props => {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<h6>о национальных проектах</h6>
						<ul className="footer-links">
							<li>
								<a
									href="https://futurerussia.gov.ru/"
									target="_blank"
								>
									Будующее России
								</a>
							</li>
							<li>
								<a
									href="http://minec.cap.ru/action/activity/soc-econom-razvitie/regionaljnie-programmi/proektnaya-deyateljnostj/podgotovka-k-realizacii-nacionaljnih-proektov/"
									target="_blank"
								>
									Министерство экономического развития и
									имущественных отношений Чувашии
								</a>
							</li>
						</ul>
					</div>

					<div className="col-xs-6 col-md-3">
						<h6>Проекты</h6>
						<ul className="footer-links">
							{nationalProjects.map(p => (
								<li key={p.title}>
									<Link to={p.url}>{p.title}</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="col-xs-6 col-md-3">
						<h6>Контакты</h6>
						<ul className="footer-links">
							<li>
								<a href="mailto:name@email.com">
									name@email.com
								</a>
							</li>
							<li>8-800-222-333-444</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-6 col-xs-12">
						<p className="copyright-text">Команда ICS</p>
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

import * as React from "react";
import "./news.css";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
import { Card, Row, Col } from "react-bootstrap";

type NewsType = {
	title: string;
	date: Date;
	url: string;
};

export const news: NewsType[] = [
	{
		title:
			"Фонд кино начал прием заявок на поддержку модернизации кинозалов в рамках нацпроекта «Культура»",
		date: new Date(),
		url:
			"http://culture.cap.ru/news/2020/03/24/fond-kino-nachal-priem-zayavok-na-podderzhku-moder"
	},
	{
		title:
			"Свыше 45 тысяч человек посетили Чувашский ТЮЗ после капитального ремонта",
		date: new Date(),
		url:
			"http://culture.cap.ru/news/2020/03/24/fond-kino-nachal-priem-zayavok-na-podderzhku-moder"
	},
	{
		title:
			"Библиотекари Чувашии ознакомились с опытом реализации нацпроекта «Культура» у коллег из Татарстана",
		date: new Date(),
		url:
			"http://culture.cap.ru/news/2020/03/24/fond-kino-nachal-priem-zayavok-na-podderzhku-moder"
	}
];

type NewsProps = {
	news: NewsType[];
	allNewsLink: string;
};

const params = {
	slidesPerView: 1.5,
	spaceBetween: 30
};

export const News: React.FC<NewsProps> = props => {
	return (
		<div className="news">
			<Row className="mb-4">
				<Swiper {...params}>
					{props.news.map((n, idx) => {
						const date = n.date;
						const month =
							date.getMonth() >= 10
								? date.getMonth() + 1
								: "0" + (date.getMonth() + 1);
						const day = date.getDate();
						const year = date.getFullYear();

						return (
							<Col sm="6" key={idx}>
								<Card bg="light" style={{height: "125px"}}>
									<Card.Body>
										<div>
											<span>{`${day}.${month}.${year}`}</span>
										</div>
										<div className="news__title">
											<a href={n.url} target="_blank">
												{n.title}
											</a>
										</div>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Swiper>
			</Row>
			<Row>
				<Col className="news_allnews">
					<a href={props.allNewsLink} target="_blank">
						Все новости
					</a>
				</Col>
				<Col className="news_allnews text-right">
					<a href={props.allNewsLink} target="_blank">
						Подписаться на новости
					</a>
				</Col>
			</Row>
		</div>
	);
};

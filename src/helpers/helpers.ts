export const getMonthAsWord = (month: number): string => {
	const map = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
	];
	return map[month];
};

export const dataForMap = {
	center: [56.044091, 47.19974],
	markers: [
		{
			position: [56.050782, 47.163466]
		},
		{
			position: [56.129644, 47.247925]
		}
	]
};

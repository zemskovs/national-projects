import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import "./budgetStyles.css";
import { t } from "../../services/TextService";

export type BudgetProps = {
	fed: number;
	reg: number;
	other: number;
};


export const Budget: React.FC<BudgetProps> = props => {
	const data = {
		labels: [t("Федеральный"), t("Региональный"), t("Прочий")],
		datasets: [
			{
				data: [props.fed || 0, props.reg || 0, props.other || 0],
				backgroundColor: ["#BFEDFF", "#9FE4FF", "#7FDCFF"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
			}
		]
	};

	const drawInnerText = (chart: any) => {
		const width = chart.chart.width,
			height = chart.chart.height,
			ctx = chart.chart.ctx;

		ctx.restore();
		const fontSize = (height / 114).toFixed(2);
		ctx.font = fontSize + "em sans-serif";
		ctx.textBaseline = "middle";

		const text = chart.config.options.centerText.text,
			textX = Math.round((width - ctx.measureText(text).width) / 2),
			textY = height / 2;

		ctx.fillText(text, textX, textY);
		ctx.save();
	};

	React.useEffect(() => {
		(window as any).Chart.pluginService.register({
			beforeDraw: function (chart: any) {
				if (
					chart.config.options.centerText.display !== null &&
					typeof chart.config.options.centerText.display !==
						"undefined" &&
					chart.config.options.centerText.display
				) {
					drawInnerText(chart);
				}
			}
		});
	}, []);

	return (
		<div className="budget__wrap">
			<Doughnut
				data={data}
				options={{
					legend: {
						display: false
					},
					centerText: {
						display: true,
						text: `${props.reg + props.fed + props.other} млн`
					},
					cutoutPercentage: 70,
					rotation: 2 * Math.PI,
					maintainAspectRatio: false
				}}
			/>
		</div>
	);
};
Budget.displayName = "Budget";

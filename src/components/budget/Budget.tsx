import * as React from "react";
import { Doughnut } from "react-chartjs-2";

type BudgetProps = {
	planFed: number;
	planReg: number;
};

const data = {
	labels: ["Red", "Green", "Yellow"],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ["#BFEDFF", "#9FE4FF", "#7FDCFF"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
		}
	]
};

export const Budget: React.FC = props => {
	const chartRef = React.useRef();


	return (
		<div className="budget__wrap">
			<Doughnut
				data={data}
				options={{
					legend: {
						display: false
					},
					cutoutPercentage: 70,
					rotation: 2 * Math.PI
				}}
			/>
		</div>
	);
};
Budget.displayName = "Budget";

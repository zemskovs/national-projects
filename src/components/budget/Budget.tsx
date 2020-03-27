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
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
		}
	]
};

export const Budget: React.FC = props => {
	return <Doughnut data={data} />;
};
Budget.displayName = "Budget";

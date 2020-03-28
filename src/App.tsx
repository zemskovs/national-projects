import * as React from "react";
import { CulturePage } from "./pages/CulturePage";
import "./main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DemosPage } from "./pages/DemosPage";
import { Page } from "./components/layouts/Page";
import { Menu } from "./components/menu/Menu";

interface Props {
	name: string;
}

class App extends React.Component<Props> {
	render() {
		return (
			<BrowserRouter>
				<Page>
					<Switch>
						<Route exact path="/" component={CulturePage} />
						<Route path="/demos" component={DemosPage} />
					</Switch>
				</Page>
			</BrowserRouter>
		);
	}
}

export default App;

import * as React from "react";
import { CulturePage } from "./pages/CulturePage";
import "./main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DemosPage } from "./pages/DemosPage";
import { Page } from "./components/layouts/Page";
import { Menu } from "./components/menu/Menu";
import { MainPage } from "./pages/MainPage";
import { EducationPage } from "./pages/EducationPage";
import "bootstrap/dist/css/bootstrap.min.css"


class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Page>
					<Switch>
						<Route exact path="/" component={MainPage} />
						<Route path="/culture" component={CulturePage} />
						<Route path="/demos" component={DemosPage} />
						<Route path="/education" component={EducationPage} />
					</Switch>
				</Page>
			</BrowserRouter>
		);
	}
}

export default App;

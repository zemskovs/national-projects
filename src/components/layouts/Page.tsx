import * as React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Menu } from "../menu/Menu";

export const Page: React.FC = props => {
	return (
		<>
			<Navbar />
			<Menu />
			{props.children}
			<Footer />
		</>
	);
};
Page.displayName = "Page";

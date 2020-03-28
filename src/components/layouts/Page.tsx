import * as React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Menu } from "../menu/Menu";
import { useScrollToTop } from "../../hooks/scrollTop";

export const Page: React.FC = props => {
	useScrollToTop()

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

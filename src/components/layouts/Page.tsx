import * as React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Page: React.FC = props => {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
};
Page.displayName = "Page";

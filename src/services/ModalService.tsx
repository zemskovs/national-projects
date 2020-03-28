import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactNode } from "react";

export class ModalService {
	show(modal: ReactNode) {
		const Modal = () => {
			return <div>{modal}</div>;
		};
		ReactDOM.render(<Modal />, document.getElementById("modal-root"));
	}
}

import * as React from "react";
import "./reactions.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { t } from "../../services/TextService";

toast.configure();

const reactions = ["👍", "😀", "😘", "😍", "😆", "😜"];

export const Reactions = () => {
	return (
		<div className="reactions d-flex justify-content-center align-content-center">
			{reactions.map((el, idx) => (
				<div
					className="mr-5 reaction__emoji d-flex align-content-center justify-content-center"
					key={idx}
				>
					<div onClick={() => toast(t("🙏 Ваш голос учтен"))}>{el}</div>
				</div>
			))}
		</div>
	);
};

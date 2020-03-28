import { ModalService } from "../services/ModalService";

export const useModal = () => {
	const modalService = new ModalService();
	return modalService;
};

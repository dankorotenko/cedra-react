import { createContext, useContext } from "react";

export type ModalContextValue = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
  setIsModalOpen: (isOpen: boolean) => void;
};

export const ModalContext = createContext<ModalContextValue | undefined>(
  undefined
);

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within a ModalProvider");
  return ctx;
};

import { useCallback, useMemo, useState } from "react";
import { ModalContext } from "../hooks/useModal";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const toggleModal = useCallback(() => setIsModalOpen((v) => !v), []);

  const value = useMemo(
    () => ({ isModalOpen, openModal, closeModal, toggleModal, setIsModalOpen }),
    [isModalOpen, openModal, closeModal, toggleModal]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

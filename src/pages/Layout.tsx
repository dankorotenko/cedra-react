import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { ModalProvider } from "../context/ModalContext";
import { useModal } from "../hooks/useModal";
import { CookieBanner } from "../components/CookieBanner";

const LayoutBody = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  return (
    <>
      <Header />
      <Outlet />
      <CookieBanner />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export const Layout = () => {
  return (
    <ModalProvider>
      <LayoutBody />
    </ModalProvider>
  );
};

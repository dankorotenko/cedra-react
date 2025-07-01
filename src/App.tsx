import { Header } from "./components/Header";
import { Promo } from "./components/Promo";
import { Info } from "./components/Info";
import { Public } from "./components/Public";
import { Protocol } from "./components/Protocol";
import { Blockchain } from "./components/Blockchain";
import { Launch } from "./components/Launch";
import { Join } from "./components/Join";
import { Move } from "./components/Move";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { CookieBanner } from "./components/CookieBanner";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      <Promo />
      <Info />
      <Public setIsModalOpen={setIsModalOpen} />
      <Protocol />
      <Blockchain />
      <Launch setIsModalOpen={setIsModalOpen} />
      <Join />
      <Move />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <CookieBanner />
    </>
  );
}

export default App;

import { Promo } from "../components/Promo";
import { Info } from "../components/Info";
import { Public } from "../components/Public";
import { Protocol } from "../components/Protocol";
import { Blockchain } from "../components/Blockchain";
import { Launch } from "../components/Launch";
import { Join } from "../components/Join";
import { Move } from "../components/Move";

export const Home = () => {
  return (
    <>
      <Promo />
      <Info />
      <Public />
      <Protocol />
      <Blockchain />
      <Launch />
      <Join />
      <Move />
    </>
  );
};

export const Blockchain = () => {
  return (
    <section className="blockchain">
      <div className="container">
        <img
          className="blockchain__image wow animate__animated animate__fadeIn animation__delay_500"
          src="./images/blockchain.png"
          alt="blockchain"
        />
        <div className="blockchain__right">
          <div className="blockchain__title">
            Real Time Next Generation Distributed System
          </div>
          <div className="blockchain__wrapper">
            <div className="wow animate__animated animate__fadeIn">
              <img src="./images/b1.svg" alt="b1" />
              <div className="blockchain__text">160,000 TPS</div>
            </div>
            <div className="wow animate__animated animate__fadeIn animation__delay_100">
              <img src="./images/b2.svg" alt="b2" />
              <div className="blockchain__text">Parallel Execution</div>
            </div>
            <div className="wow animate__animated animate__fadeIn animation__delay_200">
              <img src="./images/b3.svg" alt="b3" />
              <div className="blockchain__text">Programmable Cryptography</div>
            </div>
            <div className="wow animate__animated animate__fadeIn animation__delay_300">
              <img src="./images/b4.svg" alt="b4" />
              <div className="blockchain__text">Aptos Move VM Compatible</div>
            </div>
            <div className="wow animate__animated animate__fadeIn animation__delay_400">
              <img src="./images/b5.svg" alt="b5" />
              <div className="blockchain__text">Network SDK</div>
            </div>
            <div className="wow animate__animated animate__fadeIn animation__delay_500">
              <img src="./images/b6.svg" alt="b6" />
              <div className="blockchain__text">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

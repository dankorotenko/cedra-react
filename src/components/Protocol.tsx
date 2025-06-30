export const Protocol = () => {
  return (
    <section className="protocol">
      <div className="container">
        <div className="protocol__left">
          <div className="protocol__title">
            An Open Blockchain Protocol To Build Networks
          </div>
          <div className="protocol__subtitle">
            Cedra gives anyone the opportunity to launch their own fast,
            customizable decentralized network. Cedra’s network topology is not
            based on the need to scale, but instead in the needs of the new
            world:
          </div>
          <div className="protocol__text">
            People increasingly want the independence and power to launch
            networks without managing and creating their own blockchains.
          </div>
        </div>
        <img
          className="wow animate__animated animate__fadeIn animation__delay_500"
          src="./images/protocol.png"
          alt="protocol"
        />
      </div>
    </section>
  );
};

export const Public = () => {
  return (
    <section className="public">
      <div className="container">
        <div className="public__left">
          <img
            className="wow animate__animated animate__fadeIn animation__delay_500"
            src="./images/public.png"
            alt="public"
          />
        </div>
        <div className="public__right">
          <div className="public__title">A Public Good For Move</div>
          <div className="public__subtitle">
            Cedra Is The First Public Good Infrastructure For The Move Ecosystem
            and will be community owned and governed.
          </div>
          <div className="public__list">
            <div className="wow animate__animated animate__fadeIn">
              <img src="./images/public1.svg" alt="public" />
              <div className="public__text">Community Run Validators</div>
            </div>
            <div className="wow animate__animated animate__fadeIn animation__delay_500">
              <img src="./images/public2.svg" alt="public" />
              <div className="public__text">Democratic Governance</div>
            </div>
            <div className="wow animate__animated animate__fadeIn animation__delay_1000">
              <img src="./images/public3.svg" alt="public" />
              <div className="public__text">True Decentralization</div>
            </div>
          </div>
          <button className="jelly-button promo__button invitation">
            Join The Ecosystem
          </button>
        </div>
      </div>
    </section>
  );
};

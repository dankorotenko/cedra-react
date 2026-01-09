import { useModal } from "../hooks/useModal";

export const Launch = () => {
  const { openModal } = useModal();
  return (
    <section className="launch">
      <div className="container">
        <div>
          <h2>
            Fair
            <span>Launch 2.0</span>
          </h2>
        </div>
        <div>
          <div className="launch__list">
            <div>
              <img src="./images/asterisk.svg" alt="asterisk" />
              <div>No early VC allocations or insider rounds</div>
            </div>
            <div>
              <img src="./images/asterisk.svg" alt="asterisk" />
              <div>Robust treasury for growth, ecosystem and adoption</div>
            </div>
            <div>
              <img src="./images/asterisk.svg" alt="asterisk" />
              <div>Fair protocol distribution over time</div>
            </div>
            <div>
              <img src="./images/asterisk.svg" alt="asterisk" />
              <div>Community Participation</div>
            </div>
          </div>
          <button
            className="jelly-button promo__button invitation"
            onClick={openModal}
          >
            Request To Join
          </button>
        </div>
      </div>
    </section>
  );
};

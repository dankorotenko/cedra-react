import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.5,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};

export const Public = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (isModalOpen: boolean) => void;
}) => {
  return (
    <section className="public">
      <div className="container">
        <div className="public__left">
          <motion.img
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
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
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0}
            >
              <img src="./images/public1.svg" alt="public" />
              <div className="public__text">Community Run Validators</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={1}
            >
              <img src="./images/public2.svg" alt="public" />
              <div className="public__text">Democratic Governance</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={2}
            >
              <img src="./images/public3.svg" alt="public" />
              <div className="public__text">True Decentralization</div>
            </motion.div>
          </div>
          <button
            className="jelly-button promo__button invitation"
            onClick={() => setIsModalOpen(true)}
          >
            Join The Ecosystem
          </button>
        </div>
      </div>
    </section>
  );
};

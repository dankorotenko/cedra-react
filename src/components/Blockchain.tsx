import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};

export const Blockchain = () => {
  return (
    <section className="blockchain">
      <div className="container">
        <motion.img
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={5}
          className="blockchain__image"
          src="./images/blockchain.png"
          alt="blockchain"
        />
        <div className="blockchain__right">
          <div className="blockchain__title">
            Real Time Next Generation Distributed System
          </div>
          <div className="blockchain__wrapper">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0}
            >
              <img src="./images/b1.svg" alt="b1" />
              <div className="blockchain__text">160,000 TPS</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={1}
            >
              <img src="./images/b2.svg" alt="b2" />
              <div className="blockchain__text">Parallel Execution</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={2}
            >
              <img src="./images/b3.svg" alt="b3" />
              <div className="blockchain__text">Programmable Cryptography</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={3}
            >
              <img src="./images/b4.svg" alt="b4" />
              <div className="blockchain__text">Aptos Move VM Compatible</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={4}
            >
              <img src="./images/b5.svg" alt="b5" />
              <div className="blockchain__text">Network SDK</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={5}
            >
              <img src="./images/b6.svg" alt="b6" />
              <div className="blockchain__text">AI Support</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

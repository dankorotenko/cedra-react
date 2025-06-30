import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: "easeInOut",
      duration: 1,
    },
  },
};

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
            customizable decentralized network. Cedra's network topology is not
            based on the need to scale, but instead in the needs of the new
            world:
          </div>
          <div className="protocol__text">
            People increasingly want the independence and power to launch
            networks without managing and creating their own blockchains.
          </div>
        </div>
        <motion.img
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          src="./images/protocol.png"
          alt="protocol"
        />
      </div>
    </section>
  );
};

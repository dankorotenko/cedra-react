import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};

export const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__wrapper">
          <div>
            <div className="info__title">
              Cedra is the first community backed Move Blockchain that lets
              anyone create their own distributed networks.
            </div>
          </div>
          <div className="info__right">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0}
            >
              <div className="info__subtitle">Fairly distributed</div>
              <div className="info__description">
                Cedra is part of a new wave of community led distributed systems
                where funding, development, and growth are done in collaboration
                with core contributors, builders, and a global network of token
                holders
              </div>
            </motion.div>
            <br />
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={1}
            >
              <div className="info__subtitle">
                An Ecosystem Of Move Networks
              </div>
              <div className="info__description">
                Cedra's ecosystem will be made up of Move applications,
                liquidity, capital, and developers that wish to launch their own
                independent networks
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

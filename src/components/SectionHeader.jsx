import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { C, fadeUp, stagger } from "../constants/designTokens";

export default function SectionHeader({ num, title }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 56 }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
        }}
        style={{
          fontFamily: "monospace",
          fontSize: 11,
          color: "#555",
          letterSpacing: "0.18em",
          opacity: 0.65,
        }}
      >
        {num}
      </motion.span>
      <motion.h2
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
        }}
        style={{
          fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: "#fff",
          margin: 0,
        }}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{
          hidden: { scaleX: 0, originX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
        }}
        style={{
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, #ffffff, transparent)`,
          maxWidth: 180,
        }}
      />
    </motion.div>
  );
}
